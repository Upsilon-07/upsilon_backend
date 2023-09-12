const Exercise = require("../models/exercise.model");

const getExerciseDetail = (req,res) => {

    const id = Number(req.params.id);
  
    Exercise.getAllExerciseByExerciseId(id)
    .then((exercise)=>{

        if (exercise !== null) {
            res.status(200).send(exercise);
        } else {
            res.status(404).send("Exercise not found");
        }
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send("Error retrieving exercise from database");
    });
    
}

module.exports = {
getExerciseDetail
};
