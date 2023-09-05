
const favouritesRouter = require("express").Router()
const CourseController = require("../controllers/course.controller")

//* /favourites/courses
//endpoint:/favourites/courses
favouritesRouter.post("/courses",CourseController.postIsFavourite)

//* /favourites/meals
// favouritesRouter.post("/meals",MealController.postIsFavourite)



module.exports = favouritesRouter