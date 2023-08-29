
const express = require("express")
const courseRouter = express.Router()
const CourseController = require("../controllers/course.controller")
//endpoint:/courses
courseRouter.get("/",CourseController.getAllCourses)

module.exports = courseRouter