const database = require("../database/database-config")

const getAll =()=>{
    return database.query("SELECT * FROM courses")
    .then(([results])=>results)
}

const getNumberLessonsPerCourse =()=>{
    return database.query("SELECT courseName, COUNT(*) AS lessonCount FROM courses JOIN lessons ON courses.id = lessons.course_id GROUP BY courseName")
    .then(([results])=>results)
}

module.exports = {
    getAll,
    getNumberLessonsPerCourse
}