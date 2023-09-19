
const favouritesRouter = require("express").Router()
const FavouritesController = require("../controllers/favourite.controller")

const MealController = require("../controllers/favouriteMeal.controller")

//* /favourites/courses
//endpoint:/favourites/courses
favouritesRouter.post("/courses",FavouritesController.postIsFavourite)
favouritesRouter.get("/courses", FavouritesController.getFavouriteCourses)

//* /favourites/meals
 favouritesRouter.post("/meals",MealController.postIsFavouriteMeal)
 favouritesRouter.get("/meals",MealController.getFavouriteMeals)



module.exports = favouritesRouter