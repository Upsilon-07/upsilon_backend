const Course = require('../models/course.model')

const getAllCourses = (req,res) =>{
  Course.getAll()
    .then((courses)=>{
      if(courses !== null && courses.length > 0){
        Course.getNumberLessonsPerCourse()
          .then(numberLessons =>{
            if(numberLessons !== null && numberLessons.length > 0){

              res.status(200).send({courses, numberLessons});
            } else {
              res.status(404).send("Lessons per Course not found in DB")
            }
          })
          .catch((err)=>{
            console.error(err);
            res.status(500).send("Error retrieving all lessons per course.")
          })
      } else {
        res.status(404).send("Courses not found in DB")
      }
    })
    .catch((err)=>{
      console.error(err);
      res.status(500).send("Error retrieving all courses")
    })
}

module.exports={
    getAllCourses
}