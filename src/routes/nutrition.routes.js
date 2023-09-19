const nutritionRouter = require("express").Router()
const NutritionController = require("../controllers/nutrition.controller")

//* Get all nutrients by meal_id
//* endpoint: /nutrition/:id

nutritionRouter.get("/:id", NutritionController.getAllNutrientsByMealId)

module.exports = nutritionRouter