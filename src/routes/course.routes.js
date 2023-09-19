const courseRouter = require("express").Router()
const CourseController = require("../controllers/course.controller")
const { verifyToken } = require("../middlewares/users.middleware");

courseRouter.get("/", verifyToken, CourseController.getAllCourses)
courseRouter.post("/:id",CourseController.getAllLessonsByCourseId)

module.exports = courseRouter