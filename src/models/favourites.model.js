const database = require("../database/database-config");

const checkIfFavouriteExists = (userID, courseID) => {
  return database
    .query("SELECT * FROM favourite_courses WHERE user_id=? AND course_id=?", [
      userID,
      courseID,
    ])
    .then(([results]) => results);
};

const createNewFavourite = (data) => {
  return database
    .query("INSERT INTO favourite_courses SET ?", data)
    .then(([results]) => results);
};

const deleteFavourite = (userID, courseID) => {
  return database
    .query("DELETE FROM favourite_courses WHERE user_id=? AND course_id=?", [
      userID,
      courseID,
    ])
    .then(([results]) => results);
};

// const getAllFavouriteCourses = () => {
//     return database
//       .query(`
//         SELECT courseName, image, rating, trainer, difficulty, user_id
//         FROM courses 
//         INNER JOIN favourite_courses ON course_id = id
//       `)
//       .then(([results]) => results);
//   };

  const getAllFavouriteCoursesByUser = (userId) => {
    return database
      .query('SELECT c.*, fc.user_id FROM courses c JOIN favourite_courses fc ON c.id = fc.course_id WHERE fc.user_id = ?', [userId])
      .then(([results]) => results);
  };


  const getCourseIfIsFavouriteByUser = (courseId, userId) => {
    return database.query("Select * from favourite_courses WHERE course_id = ? AND user_id = ?", [courseId, userId])
      .then(([results]) => results);

  }

module.exports = {
  checkIfFavouriteExists,
  deleteFavourite,
  createNewFavourite,
  getAllFavouriteCoursesByUser,
  getCourseIfIsFavouriteByUser,
};
