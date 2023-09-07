const courseRouter = require("express").Router()
const CourseController = require("../controllers/course.controller")

courseRouter.get("/",CourseController.getAllCourses)
courseRouter.post("/:id",CourseController.getAllLessonsByCourseId)

module.exports = courseRouter