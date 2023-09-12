const exerciseRouter = require("express").Router()

const ExerciseController = require("../controllers/exercise.controller")


//endpoint:/exercise/:id
exerciseRouter.get("/:id", ExerciseController.getExerciseDetail)

module.exports = exerciseRouter