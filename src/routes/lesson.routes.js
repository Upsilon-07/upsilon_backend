const lessonRouter = require("express").Router()
const LessonController = require("../controllers/lesson.controller")


//endpoint:/lesson/:id
lessonRouter.get("/:id", LessonController.getLessons)

module.exports = lessonRouter;