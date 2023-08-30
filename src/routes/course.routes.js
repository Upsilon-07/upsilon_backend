
const courseRouter = require("express").Router()
const CourseController = require("../controllers/course.controller")
//endpoint:/courses
courseRouter.get("/",CourseController.getAllCourses)

module.exports = courseRouter