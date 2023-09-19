const express = require('express');
const mealRouter = express.Router();
const MealController = require("../controllers/meal.controller");

//* get all meals
//* endpoint: /meals
mealRouter.get("/", MealController.getAllMeals)


//* get all meals by id
//* endpoint: /meals/:id
mealRouter.post("/:id", MealController.getMealbyId)






module.exports = mealRouter