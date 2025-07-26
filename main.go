package main

import (
	"context"
	"io"
	"log"
	"maps"
	"math/rand"
	"net/http"
	"os"
	"slices"
	"sort"
	"strconv"
	"strings"
	"time"

	// "encoding/json"
	"fmt"

	"golang.org/x/oauth2/google"
	"gopkg.in/yaml.v3"

	"google.golang.org/api/option"
	"google.golang.org/api/sheets/v4"

	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

var configPath = "."
var config Config
var recordsCache map[string]RecordCache = make(map[string]RecordCache)

func main() {
	var envConfigPath = os.Getenv("SUPERPLUG_CONFIG_PATH")
	if envConfigPath != "" {
		configPath = envConfigPath
	}
	os.MkdirAll(configPath+"/files/", 0755)
	yamlFile, err := os.ReadFile(configPath + "/config.local.yaml")
	if err == nil {
		yaml.Unmarshal(yamlFile, &config)
	} else {
		fmt.Println("Could not load config:")
		fmt.Println(err)
	}

	r := gin.Default()
	r.Use(static.Serve("/", static.LocalFile("./public", true)))

	r.GET("/config/:name", func(ctx *gin.Context) {
		sheetName := ctx.Param("name")
		var sheetConfig ConfigSheet

		for _, value := range config.Sheets {
			if value.Name == sheetName {
				sheetConfig = value
				break
			}
		}
		configData := map[string]string{"firebaseApiKey": os.Getenv("FIREBASE_API_KEY"), "firebaseAuthDomain": os.Getenv("FIREBASE_AUTH_DOMAIN")}

		if sheetConfig.SheetId != "" {
			for key, definition := range sheetConfig.Definitions {
				options := ""
				for _, v := range definition {
					if options == "" {
						options = v.Name
					} else {
						options += "," + v.Name
					}
				}
				configData[key+"Options"] = options
			}
		}

		ctx.JSON(200, configData)
	})

	r.GET("/files/:name", getFile)
	r.GET("/data/:name", getRecords)
	r.GET("/data/:name/:id", getRecord)
	r.POST("/data/:name/:id", postRecord)

	fmt.Println("Starting service on 8080...")
	r.Run(":8080")
}

func getSheetsService() *sheets.Service {
	scopes := []string{
		"https://www.googleapis.com/auth/drive",
		"https://www.googleapis.com/auth/spreadsheets",
	}
	ctx := context.Background()
	credentials, _ := google.FindDefaultCredentials(ctx, scopes...)
	config, _ := google.ConfigFromJSON(credentials.JSON, scopes...)
	tok, _ := credentials.TokenSource.Token()
	client := config.Client(ctx, tok)

	srv, err := sheets.NewService(ctx, option.WithHTTPClient(client))

	if err != nil {
		fmt.Println("Unable to retrieve Sheets client:")
		fmt.Println(err)
	}

	return srv
}

func postRecord(c *gin.Context) {
	sheetName := c.Param("name")
	var sheetConfig ConfigSheet

	for _, value := range config.Sheets {
		if value.Name == sheetName {
			sheetConfig = value
			break
		}
	}
	srv := getSheetsService()

	var data map[string]string = make(map[string]string)
	form, _ := c.MultipartForm()
	if form != nil && form.File != nil {
		for k, v := range form.File {

			fmt.Println("Found file: " + k)

			for _, f := range v {
				fmt.Println(&f.Filename)
				src, _ := f.Open()
				defer src.Close()
				bytes, _ := io.ReadAll(src)
				os.WriteFile(configPath+"/files/"+f.Filename, bytes, 0644)
				data[k] = "/files/" + f.Filename
			}
		}
	}

	for key, value := range c.Request.PostForm {
		fmt.Printf("%v = %v \n", key, value)
		if value[0] != "undefined" {
			data[key] = value[0]
		}
	}

	// make sure we have an id, set if not
	_, ok := data["id"]
	if !ok {
		id := strings.Replace(strings.ToLower(data["title"]), " ", "-", -1)
		if len(id) > 16 {
			id = id[:16]
		}
		if id != "" {
			id = id + "-" + RandomString(4)
		} else {
			id = RandomString(20)
		}

		data["id"] = id
	}

	values := transformMapToVal(sheetConfig, data)
	valuesArray := [][]interface{}{values}
	valueRange := sheets.ValueRange{Values: valuesArray}
	rowIndex := data["hidden_row_index"]

	if rowIndex == "" {
		rec := loadRecord(sheetConfig)
		rowIndex = strconv.Itoa(len(rec.Records))
	}

	offset := 4
	num, err := strconv.Atoi(sheetConfig.StartRow)
	if err == nil {
		offset = num
	}

	newRowIndex := 0
	num, err = strconv.Atoi(rowIndex)
	if err == nil {
		newRowIndex = num + offset
	}

	rowIndex = strconv.Itoa(newRowIndex)

	fmt.Println("Trying to update row: " + rowIndex)

	// get sheet
	// rangeString := "A" + rowIndex
	// rangePieces := strings.Split(sheetConfig.Range, "!")
	// if len(rangePieces) > 1 {
	// 	rangeString = rangePieces[0] + "!" + rangeString
	// }
	rangeString := sheetConfig.Worksheet + "!" + sheetConfig.StartColumn + rowIndex

	fmt.Println("Preparing to update range: " + rangeString)

	_, err = srv.Spreadsheets.Values.Update(sheetConfig.SheetId, rangeString, &valueRange).ValueInputOption("RAW").Do()
	if err != nil {
		log.Fatalf("Unable to retrieve data from sheet: %v", err)
	}

	c.Status(200)
}

func getRecords(c *gin.Context) {

	sheetName := c.Param("name")
	var sheetConfig ConfigSheet

	for _, value := range config.Sheets {
		if value.Name == sheetName {
			sheetConfig = value
			break
		}
	}

	recordResult := loadRecord(sheetConfig)

	c.JSON(200, recordResult)
}

func getRecord(c *gin.Context) {

	sheetName := c.Param("name")
	id := c.Param("id")
	var sheetConfig ConfigSheet
	for _, value := range config.Sheets {
		if value.Name == sheetName {
			sheetConfig = value
			break
		}
	}

	cachedRecord := loadCachedRecord(sheetConfig)

	var record map[string]interface{}
	for _, rec := range cachedRecord.Records {
		if rec["id"] == id {
			record = rec
			break
		}
	}

	c.JSON(200, record)
}

func getFile(c *gin.Context) {
	fileName := c.Param("name")

	b, err := os.ReadFile(configPath + "/files/" + fileName)

	if err != nil {
		c.Status(404)
	} else {
		c.Header("Content-Disposition", "attachment; filename="+fileName)
		c.Data(http.StatusOK, "application/octet-stream", b)
	}
}

func loadCachedRecord(sheetConfig ConfigSheet) RecordCache {
	cachedRecord, ok := recordsCache[sheetConfig.Name]
	if !ok {
		cachedRecord = loadRecord(sheetConfig)
	}

	return cachedRecord
}

func loadRecord(sheetConfig ConfigSheet) RecordCache {
	srv := getSheetsService()

	rangeString := sheetConfig.Worksheet + "!" + sheetConfig.StartColumn + sheetConfig.StartRow + ":" + sheetConfig.EndColumn

	resp, err := srv.Spreadsheets.Values.Get(sheetConfig.SheetId, rangeString).Do()
	if err != nil {
		log.Fatalf("Unable to retrieve data from sheet: %v", err)
	}

	recordCache := RecordCache{}
	recordCache.Records, recordCache.Definitions = transformValToMap(sheetConfig, resp.Values)
	recordsCache[sheetConfig.Name] = recordCache

	return recordCache
}

func transformValToMap(sheetConfig ConfigSheet, values [][]interface{}) ([]map[string]interface{}, map[string][]Tag) {

	records := []map[string]interface{}{}
	definitions := map[string][]Tag{}

	for i, row := range values {
		if len(row) == 0 {
			continue
		}

		var record = make(map[string]interface{})

		record["hidden_row_index"] = i

		for _, field := range sheetConfig.Fields {
			if field.Index >= len(row) {
				continue
			}

			if field.Value != "" {
				record[field.Definition] = field.Value
			} else {
				record[field.Definition] = row[field.Index].(string)
			}

			definition, ok := sheetConfig.Definitions[field.Definition]
			if ok {
				values := strings.Split(row[field.Index].(string), ",")
				var valueTags []Tag
				for i := range values {
					valueId := strings.ReplaceAll(strings.ToLower(strings.TrimSpace(values[i])), " ", "-")

					val, ok := definition[valueId]
					if ok {
						val.Id = valueId
						valueTags = append(valueTags, val)
					} else {
						valueTags = append(valueTags, Tag{Name: values[i], Id: valueId})
					}
				}

				record[field.Definition] = valueTags
				record[field.Definition+"Text"] = row[field.Index].(string)
				options := ""
				// store all definitions
				definitions[field.Definition] = slices.Collect(maps.Values(definition))
				// sort definition slice
				sort.Slice(definitions[field.Definition], func(i, j int) bool {
					return definitions[field.Definition][i].Name < definitions[field.Definition][j].Name
				})
				for _, v := range definition {
					if options == "" {
						options = v.Name
					} else {
						options += "," + v.Name
					}
					// definitions[field.Definition] = append(definitions[field.Definition], v)
				}
				record[field.Definition+"Options"] = options
			}
		}

		records = append(records, record)
	}

	if sheetConfig.Sort.Field != "" {
		sort.SliceStable(records, func(i, j int) bool {
			dateString1 := records[i][sheetConfig.Sort.Field].(string)
			dateString2 := records[j][sheetConfig.Sort.Field].(string)

			date1, _ := time.Parse(sheetConfig.Sort.Format, dateString1)
			date2, _ := time.Parse(sheetConfig.Sort.Format, dateString2)

			if sheetConfig.Sort.Direction == "desc" {
				return date1.Unix() > date2.Unix()
			} else {
				return date1.Unix() < date2.Unix()
			}
		})
	}

	return records, definitions
}

func transformMapToVal(sheetConfig ConfigSheet, data map[string]string) []interface{} {
	size := 0
	for _, field := range sheetConfig.Fields {
		if field.Index+1 > size {
			size = field.Index + 1
		}
	}

	values := make([]interface{}, size)

	for _, field := range sheetConfig.Fields {
		val, ok := data[field.Definition]
		if ok {
			values[field.Index] = val
		}
	}

	return values
}

type Record struct {
	Fields map[string]interface{} `json:"fields"`
}

type RecordCache struct {
	Records     []map[string]interface{} `json:"records"`
	Definitions map[string][]Tag         `json:"definitions"`
}

type Config struct {
	Sheets []ConfigSheet `yaml:"sheets"`
}

type ConfigSheet struct {
	SheetId string `yaml:"sheetId"`
	Name    string `yaml:"name"`
	//Range       string          `yaml:"range"`
	Worksheet   string          `yaml:"worksheet"`
	StartColumn string          `yaml:"startColumn"`
	EndColumn   string          `yaml:"endColumn"`
	StartRow    string          `yaml:"startRow"`
	Sort        ConfigSheetSort `yaml:"sort"`
	// TypeColors            map[string]string         `yaml:"typeColors"`
	// TypeAbbreviations     map[string]string         `yaml:"typeAbbreviations"`
	// CategoryAbbreviations map[string]string         `yaml:"categoryAbbreviations"`
	Fields      []ConfigSheetField        `yaml:"fields"`
	Definitions map[string]map[string]Tag `yaml:"definitions"`
	// Categories            map[string]Tag     `yaml:"categories"`
	// Types                 map[string]Tag     `yaml:"types"`
}

type ConfigSheetField struct {
	Name       string `yaml:"name"`
	Index      int    `yaml:"index"`
	Definition string `yaml:"definition"`
	Value      string `yaml:"value"`
	Visibility string `yaml:"visibility"`
}

type ConfigSheetSort struct {
	Field     string `yaml:"field"`
	Format    string `yaml:"format"`
	Direction string `yaml:"direction"`
}

type Tag struct {
	Name     string `yaml:"name" json:"name"`
	Id       string `yaml:"id" json:"id"`
	ImageUrl string `yaml:"imageUrl" json:"imageUrl"`
	Symbol   string `yaml:"symbol" json:"symbol"`
}

const charset = "abcdefghijklmnopqrstuvwxyz" +
	"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

var seededRand *rand.Rand = rand.New(
	rand.NewSource(time.Now().UnixNano()))

func StringWithCharset(length int, charset string) string {
	b := make([]byte, length)
	for i := range b {
		b[i] = charset[seededRand.Intn(len(charset))]
	}
	return string(b)
}

func RandomString(length int) string {
	return StringWithCharset(length, charset)
}
