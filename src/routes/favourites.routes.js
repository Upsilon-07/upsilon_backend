
const favouritesRouter = require("express").Router()
const FavouritesController = require("../controllers/favourite.controller")

//* /favourites/courses
//endpoint:/favourites/courses
favouritesRouter.post("/courses",FavouritesController.postIsFavourite)
favouritesRouter.get("/courses", FavouritesController.getFavouriteCourses)

//* /favourites/meals
// favouritesRouter.post("/meals",MealController.postIsFavourite)



module.exports = favouritesRouter