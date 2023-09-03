
const favouritesRouter = require("express").Router()
const CourseController = require("../controllers/course.controller")

//* /favourites/courses
favouritesRouter.post("/courses",CourseController.postIsFavourite)

//* /favourites/meals
// favouritesRouter.post("/meals",CourseController.postIsFavourite)



module.exports = favouritesRouter