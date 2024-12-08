package main

import (
	"embed"
	"errors"
	"log"
	"net/http"
	"os"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

//go:embed VUE/dist
var embededFiles embed.FS

type UrlModel struct {
	Url string `json:"url"`
}

func main() {
	os.Setenv("REVERSE_PROXY_URL", "http://localhost:8080")
	os.Setenv("WEB_PORT", "4173")

	reverseProxyURL, ok := os.LookupEnv("REVERSE_PROXY_URL")
	if !ok || reverseProxyURL == "" {
		log.Fatalf("web: environment variable not declared: reverseProxyURL")
	}

	webPort, ok := os.LookupEnv("WEB_PORT")
	if !ok || webPort == "" {
		log.Fatalf("web: environment variable not declared: webPort")
	}

	e := echo.New()

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
	}))

	e.Use(middleware.StaticWithConfig(middleware.StaticConfig{
		HTML5:      true,
		Root:       "VUE/dist",
		Filesystem: http.FS(embededFiles),
	}))

	api := e.Group("/")
	api.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "users")
	})

	e.GET("/reverse-proxy-url", func(c echo.Context) error {
		return c.JSON(http.StatusOK, UrlModel{Url: reverseProxyURL})
	})

	if err := e.Start(":4173"); err != nil && !errors.Is(err, http.ErrServerClosed) {
		log.Fatal(err)
	}

}
