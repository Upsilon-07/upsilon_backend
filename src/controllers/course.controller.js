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

  Course.getById(id)
    .then((lessons) => {
      if (lessons !== null && lessons.length > 0) {
        console.log("lessons");
        Course.getCourseTitle(id)
          .then((courseTitle) => {
            console.log(courseTitle);
            if (courseTitle !== null && courseTitle.length > 0) {
              res.status(200).send({ courseTitle, lessons });
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

const postIsFavourite = (req, res) => {
  const { user_id, course_id } = req.body;

  Favourites.checkIfFavouriteExists(user_id, course_id)
    .then((result) => {
      if (result && result.length > 0) {
        Favourites.deleteFavourite(user_id, course_id)
          .then((results) => {
            if (results.affectedRows > 0) {
              res.status(200).send("Favourite deleted successfully");
            } else {
              res.status(422).send("Unprocessable Entity - unable to process");
            }
          })
          .catch((error) => {
            console.error(error);
            res.status(500).send("Error deleting favourite");
          });
      } else {
        Favourites.createNewFavourite(req.body)
          .then((results) => {
            if (results.affectedRows > 0) {
              res.status(201).send("Favourite created successfully");
            } else {
              res.status(422).send("Unprocessable Entity - unable to process");
            }
          })
          .catch((error) => {
            console.error(error);
            res.status(500).send("Error creating favourite");
          });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error verifying favourite");
    });
};

module.exports = {
  getAllCourses,
  getAllLessonsByCourseId,
  postIsFavourite,
};
