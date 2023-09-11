const database = require("../database/database-config");

const getLessonById = (lessonId)=>{
    return database
    .query("SELECT * FROM exercise where lesson_id = ?", [lessonId])
    .then(([results]) => results);

}

const getAllFromLessons = (lessonId)=>{
    return database
    .query("SELECT * FROM lessons where id = ?", [lessonId])
    .then(([results]) => results);

}

module.exports = {
 getLessonById,
 getAllFromLessons
  };