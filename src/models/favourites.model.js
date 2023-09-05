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

module.exports = {
  checkIfFavouriteExists,
  deleteFavourite,
  createNewFavourite,
};
