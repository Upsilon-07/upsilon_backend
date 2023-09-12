const express = require('express');
const mealRouter = express.Router();
const MealController = require("../controllers/meal.controller");

//* get all meals
//* endpoint: /meals
mealRouter.get("/", MealController.getAllMeals)


//* get all meals by id
//* endpoint: /meals/:id
mealRouter.get("/:id", MealController.getMealbyId)


// //* get all meals by meal_type
// //* endpoint: /meals/:meal_type
// mealRouter.get("/:meal_type", MealController.getMealByMealType)




module.exports = mealRouter