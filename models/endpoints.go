package models

import (
	"github.com/gofiber/fiber/v2"
)

func Home(c *fiber.Ctx) error {
	// Render index template
	return c.Render("home", fiber.Map{})
}
func AboutUs(c *fiber.Ctx) error {
	// Render index template
	return c.Render("about-us", fiber.Map{})
}
func Capabilities(c *fiber.Ctx) error {
	// Render index template
	return c.Render("capabilities", fiber.Map{})
}
func ContactUs(c *fiber.Ctx) error {
	// Render index template
	return c.Render("contact-us", fiber.Map{})
}
func DesignEngineeringExpertise(c *fiber.Ctx) error {
	// Render index template
	return c.Render("design-engineering-expertise", fiber.Map{})
}
func InHouseTooling(c *fiber.Ctx) error {
	// Render index template
	return c.Render("in-house-tooling", fiber.Map{})
}
func ProfileSamples(c *fiber.Ctx) error {
	// Render index template
	return c.Render("profile-samples", fiber.Map{})
}
func QualityAssurance(c *fiber.Ctx) error {
	// Render index template
	return c.Render("quality-assurance", fiber.Map{})
}
func RebatedToolingProgram(c *fiber.Ctx) error {
	// Render index template
	return c.Render("rebated-tooling-program", fiber.Map{})
}
func ValueAddedServices(c *fiber.Ctx) error {
	// Render index template
	return c.Render("value-added-services", fiber.Map{})
}
