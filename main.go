package main

import (
	"context"
	"log"
	"os"
	"sort"
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

var config Config
var cardsCache []map[string]interface{}

func main() {

	yamlFile, err := os.ReadFile("config.local.yaml")
	if err == nil {
		yaml.Unmarshal(yamlFile, &config)
	} else {
		fmt.Println("Could not load config:")
		fmt.Println(err)
	}

	r := gin.Default()
	r.Use(static.Serve("/", static.LocalFile("./public", true)))

	r.GET("/config", func(ctx *gin.Context) {
		configData := map[string]string{"firebaseApiKey": os.Getenv("FIREBASE_API_KEY"), "firebaseAuthDomain": os.Getenv("FIREBASE_AUTH_DOMAIN")}
		ctx.JSON(200, configData)
	})

	r.GET("/data/:name", getRecords)
	r.GET("/data/:name/:id", getRecord)

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
	//fmt.Println(string(credentials.JSON))
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

func getRecords(c *gin.Context) {

	sheetName := c.Param("name")
	var sheetConfig ConfigSheet

	for _, value := range config.Sheets {
		if value.Name == sheetName {
			sheetConfig = value
			break
		}
	}
	srv := getSheetsService()

	resp, err := srv.Spreadsheets.Values.Get(sheetConfig.SheetId, sheetConfig.Range).Do()
	if err != nil {
		log.Fatalf("Unable to retrieve data from sheet: %v", err)
	}

	cardsCache = transformToCardData(sheetConfig, resp.Values)

	c.JSON(200, cardsCache)
}

func getRecord(c *gin.Context) {

	sheetName := c.Param("name")
	id := c.Param("id")
	var sheetConfig ConfigSheet

	if len(cardsCache) == 0 {
		for _, value := range config.Sheets {
			if value.Name == sheetName {
				sheetConfig = value
				break
			}
		}
		srv := getSheetsService()

		resp, err := srv.Spreadsheets.Values.Get(sheetConfig.SheetId, sheetConfig.Range).Do()
		if err != nil {
			log.Fatalf("Unable to retrieve data from sheet: %v", err)
		}

		cardsCache = transformToCardData(sheetConfig, resp.Values)
	}

	var lineCard map[string]interface{}
	for _, card := range cardsCache {
		if card["id"] == id {
			lineCard = card
			break
		}
	}

	c.JSON(200, lineCard)
}

func transformToCardData(sheetConfig ConfigSheet, values [][]interface{}) []map[string]interface{} {

	records := []map[string]interface{}{}

	for _, row := range values {
		if len(row) == 0 {
			continue
		}

		var record = make(map[string]interface{})

		for _, field := range sheetConfig.Fields {
			if field.Index >= len(row) {
				continue
			}

			if field.Value != "" {
				record[field.Type] = field.Value
			} else {
				record[field.Type] = row[field.Index].(string)
			}

			val, ok := sheetConfig.Types[field.Type]
			if ok {
				values := strings.Split(row[field.Index].(string), ",")
				var valueTags []Tag
				for i := range values {
					valueId := strings.ReplaceAll(strings.ToLower(strings.TrimSpace(values[i])), " ", "-")

					val, ok := val[valueId]
					if ok {
						val.Id = valueId
						valueTags = append(valueTags, val)
					} else {
						valueTags = append(valueTags, Tag{Name: values[i], Id: valueId})
					}
				}

				record[field.Type] = valueTags
				record[field.Type+"Text"] = row[field.Index].(string)
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

	return records
}

type Record struct {
	Fields map[string]interface{} `json:"fields"`
}

type Config struct {
	Sheets []ConfigSheet `yaml:"sheets"`
}

type ConfigSheet struct {
	SheetId string          `yaml:"sheetId"`
	Name    string          `yaml:"name"`
	Range   string          `yaml:"range"`
	Sort    ConfigSheetSort `yaml:"sort"`
	// TypeColors            map[string]string         `yaml:"typeColors"`
	// TypeAbbreviations     map[string]string         `yaml:"typeAbbreviations"`
	// CategoryAbbreviations map[string]string         `yaml:"categoryAbbreviations"`
	Fields []ConfigSheetField        `yaml:"fields"`
	Types  map[string]map[string]Tag `yaml:"types"`
	// Categories            map[string]Tag     `yaml:"categories"`
	// Types                 map[string]Tag     `yaml:"types"`
}

type ConfigSheetField struct {
	Name       string `yaml:"name"`
	Index      int    `yaml:"index"`
	Type       string `yaml:"type"`
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
