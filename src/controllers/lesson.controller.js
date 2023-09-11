const { response } = require("express");
const Lesson = require("../models/lesson.model");


const getLessons = (req,res) => {
const lessonId = Number(req.params.id)

Lesson.getLessonById(lessonId)
.then((exercises)=>{
    if(exercises!== null && exercises.length>0){
        Lesson.getAllFromLessons(lessonId)
        .then((response)=>{
         
            // const courseId = Number(response[0].course_id)
            // const imageLesson = response[0].image
            // const lessonName = response[0].lesson_name

            const lessonInfo = response
            //console.log(lessonInfo)

        
           
            res.status(200).send({exercises, lessonInfo});
        }) .catch((err) => {
            console.error(err);
            res.status(500).send("Error retrieving courseID.");
          });
     
    } else {
      res.status(404).send("Exercise per lesson not found in DB");
    }
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send("Error retrieving all exercises per lesson.");
  });

}

module.exports = {
   getLessons
   
  };
