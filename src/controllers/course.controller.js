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

const getAllLessonsByCourseId = (req, res) => {
  const id = Number(req.params.id);

  Course.getById(id).then((lessons) => {
    
    if (lessons !== null && lessons.length > 0) {
      console.log("lessons")
      Course.getCourseTitle(id)
      .then(courseTitle =>{
        console.log(courseTitle);
        if(courseTitle !== null && courseTitle.length > 0){
          res.status(200).send({courseTitle, lessons});
        } else {
          res.status(404).send("course title not found in DB")
        }
      })
      .catch((err)=>{
        console.error(err);
        res.status(500).send("Error retrieving all lessons per course.")
      })
      // res.status(200).send(lessons);
    } else {
      res.status(404).send(`No lessons found with id: ${id}`);
    }
  })
  .catch((error) => {
    console.error(error);
    res.status(500).send("Error retrieving lesson by id from db.");
  });
    
};


module.exports={
    getAllCourses,
    getAllLessonsByCourseId
}