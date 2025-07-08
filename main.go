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

	r.GET("/data/:name", getData)

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

func getData(c *gin.Context) {

	sheetName := c.Param("name")
	var sheetConfig ConfigSheet

	for _, value := range config.Sheets {
		if value.Name == sheetName {
			sheetConfig = value
			break
		}
	}
	srv := getSheetsService()

	//readRange := "Assets!A3:P"
	resp, err := srv.Spreadsheets.Values.Get(sheetConfig.SheetId, sheetConfig.Range).Do()
	if err != nil {
		log.Fatalf("Unable to retrieve data from sheet: %v", err)
	}

	cards := transformToCardData(sheetConfig, resp.Values)

	c.JSON(200, cards)
}

func transformToCardData(sheetConfig ConfigSheet, values [][]interface{}) []Card {

	cards := []Card{}

	for _, row := range values {
		if len(row) == 0 {
			continue
		}

		card := Card{}
		for _, field := range sheetConfig.Fields {
			switch field.Type {
			case "name":
				card.Title = row[field.Index].(string)
			case "author":
				card.AuthorName = row[field.Index].(string)
			case "link":
				card.Link = row[field.Index].(string)
			case "description":
				card.Description = row[field.Index].(string)
			case "date":
				card.Date = row[field.Index].(string)
				card.DateTime = card.Date
			case "types":
				if field.Index < len(row) {
					types := strings.Split(row[field.Index].(string), ",")
					for i := range types {
						typeId := strings.ReplaceAll(strings.ToLower(strings.TrimSpace(types[i])), " ", "-")

						val, ok := sheetConfig.Types[typeId]
						if ok {
							card.Types = append(card.Types, val)
						} else {
							card.Types = append(card.Types, Tag{Name: types[i], Id: typeId})
						}
					}
				}
			case "categories":
				if field.Index < len(row) {
					categories := strings.Split(row[field.Index].(string), ",")
					for i := range categories {
						categoryId := strings.ReplaceAll(strings.ToLower(strings.TrimSpace(categories[i])), " ", "-")

						val, ok := sheetConfig.Categories[categoryId]
						if ok {
							card.Categories = append(card.Categories, val)
						} else {
							card.Categories = append(card.Categories, Tag{Name: categories[i], Id: categoryId})
						}
					}
				}
			}
		}

		cards = append(cards, card)
	}

	sort.SliceStable(cards, func(i, j int) bool {
		date1, _ := time.Parse("1/2/2006", cards[i].Date)
		date2, _ := time.Parse("1/2/2006", cards[j].Date)

		return date1.Unix() > date2.Unix()
	})

	return cards
}

type Card struct {
	Title       string `json:"title"`
	AuthorName  string `json:"authorName"`
	AuthorUrl   string `json:"authorUrl"`
	DateTime    string `json:"dateTime"`
	Date        string `json:"date"`
	Link        string `json:"link"`
	Description string `json:"description"`
	ImageUrl    string `json:"image"`
	Types       []Tag  `json:"types"`
	Categories  []Tag  `json:"categories"`
}

type Config struct {
	Sheets []ConfigSheet `yaml:"sheets"`
}

type ConfigSheet struct {
	SheetId               string             `yaml:"sheetId"`
	Name                  string             `yaml:"name"`
	Range                 string             `yaml:"range"`
	TypeColors            map[string]string  `yaml:"typeColors"`
	TypeAbbreviations     map[string]string  `yaml:"typeAbbreviations"`
	CategoryAbbreviations map[string]string  `yaml:"categoryAbbreviations"`
	Fields                []ConfigSheetField `yaml:"fields"`
	Categories            map[string]Tag     `yaml:"categories"`
	Types                 map[string]Tag     `yaml:"types"`
}

type ConfigSheetField struct {
	Name       string `yaml:"name"`
	Index      int    `yaml:"index"`
	Type       string `yaml:"type"`
	Visibility string `yaml:"visibility"`
}

type Tag struct {
	Name     string `yaml:"name" json:"name"`
	Id       string `yaml:"id" json:"id"`
	ImageUrl string `yaml:"imageUrl" json:"imageUrl"`
	Symbol   string `yaml:"symbol" json:"symbol"`
}
