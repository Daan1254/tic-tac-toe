package main

import (
	"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type Game struct {
	gorm.Model
	Players []Player // One-to-many relationship with Player
	Host    Player   // One-to-one relationship with Player
}

type Player struct {
	gorm.Model
	Name   string
	GameID uint // Foreign key to reference the Game
}

func getGame(id *string) {

}

func main() {
	db, err := gorm.Open(sqlite.Open("test.db"), &gorm.Config{})

	if err != nil {
		panic("failed to connect database")
	}

	db.AutoMigrate(&Product{})
	router := gin.Default()
	router.GET("/game")
	router.Run("localhost:9090")
}
