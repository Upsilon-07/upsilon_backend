const database = require("../database/database-config");

const getAllExerciseByExerciseId= (id) =>{
    return database
    .query("SELECT * FROM exercise WHERE id = ?", id)
    .then(([results]) => results);
}

module.exports = {
    getAllExerciseByExerciseId
  };
  