package main

import (
	"extrusion_profiles/middleware"
	"extrusion_profiles/models"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/template/html"
)

func main() {
	engine := html.New("./views", ".html")
	app := fiber.New(fiber.Config{
		Views: engine,
	})

	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
		AllowOrigins:     "*",
		AllowHeaders:     "Origin, Content-Type, Accept, Accept-Language, Content-Length",
	}))
	app.Use(middleware.Log)

	app.Get("/error/:error", models.ErrorPage)

	app.Get("/", models.Home)
	app.Get("/about-us", models.AboutUs)
	app.Get("/contact-us", models.ContactUs)
	app.Get("/capabilities", models.Capabilities)
	app.Get("/design-engineering-expertise", models.DesignEngineeringExpertise)
	app.Get("/in-house-tooling", models.InHouseTooling)
	app.Get("/profile-samples", models.ProfileSamples)
	app.Get("/quality-assurance", models.QualityAssurance)
	app.Get("/rebated-tooling-program", models.RebatedToolingProgram)
	app.Get("/value-added-services", models.ValueAddedServices)

	assets := app.Group("/assets")
	assets.Static("/", "./assets")

	// handle page not found errors
	app.Use(models.ErrorRedirect)

	app.Listen(":8082")
}
