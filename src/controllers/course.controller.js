const Course = require("../models/course.model");
const Favourites = require("../models/favourites.model");

const getAllCourses = (req, res) => {
  Course.getAll()
    .then((courses) => {
      if (courses !== null && courses.length > 0) {
        Course.getNumberLessonsPerCourse()
          .then((numberLessons) => {
            if (numberLessons !== null && numberLessons.length > 0) {
              res.status(200).send({ courses, numberLessons });
            } else {
              res.status(404).send("Lessons per Course not found in DB");
            }
          })
          .catch((err) => {
            console.error(err);
            res.status(500).send("Error retrieving all lessons per course.");
          });
      } else {
        res.status(404).send("Courses not found in DB");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving all courses");
    });
};

const getAllLessonsByCourseId = (req, res) => {
  const id = Number(req.params.id);

  const {userId} = req.body

  Course.getById(id)
    .then((lessons) => {
      if (lessons !== null && lessons.length > 0) {
        Course.getCourseTitle(id)
          .then((courseTitle) => {
            
            if (courseTitle !== null && courseTitle.length > 0) {

              Favourites.getCourseIfIsFavouriteByUser(id,userId)
                .then(response => {
                  if (response !== null && response.length > 0) {
                    const isFavourite = true
                    res.status(200).send({ courseTitle, lessons, isFavourite });
                  } else {
                    const isFavourite = false
                    res.status(200).send({ courseTitle, lessons, isFavourite });
                  }
                })
                .catch((err) => {
                  console.error(err);
                  res.status(500).send("Error retrieving favourite course.");
                });

            } else {
              res.status(404).send("course title not found in DB");
            }
          })
          .catch((err) => {
            console.error(err);
            res.status(500).send("Error retrieving all lessons per course.");
          });
        
      } else {
        res.status(404).send(`No lessons found with id: ${id}`);
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving lesson by id from db.");
    });
};

module.exports = {
  getAllCourses,
  getAllLessonsByCourseId,
 
};
