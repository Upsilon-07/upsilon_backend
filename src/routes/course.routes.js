
const courseRouter = require("express").Router()
const CourseController = require("../controllers/course.controller")

courseRouter.get("/",CourseController.getAllCourses)

module.exports = courseRouter