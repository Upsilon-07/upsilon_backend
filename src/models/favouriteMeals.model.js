const database = require("../database/database-config");

const checkIfFavouriteMealsExists = (userID, mealID) => {
  return database
    .query("SELECT * FROM favourite_meals WHERE user_id=? AND meal_id=?", [
      userID,
      mealID,
    ])
    .then(([results]) => results);
};

const createNewFavouriteMeal = (data) => {
  
  return database
    .query("INSERT INTO favourite_meals SET ?", data)
    .then(([results]) => results);
};

const deleteFavouriteMeal = (userID, mealID) => {
  return database
    .query("DELETE FROM favourite_meals WHERE user_id=? AND meal_id=?", [
      userID,
      mealID,
    ])
    .then(([results]) => results);
};

  const getAllFavouriteMealsByUser = (userId) => {
    return database
      .query('SELECT m.*, fm.user_id FROM meals m JOIN favourite_meals fm ON m.id = fm.meal_id WHERE fm.user_id = ?', [userId])
      .then(([results]) => results);
  };


  const getMealIfIsFavouriteByUser = (mealId, userId) => {
    return database.query("Select * from favourite_meals WHERE meal_id = ? AND user_id = ?", [mealId, mealId])
      .then(([results]) => results);

  }

module.exports = {
  checkIfFavouriteMealsExists,
  deleteFavouriteMeal,
  createNewFavouriteMeal,
  getAllFavouriteMealsByUser,
  getMealIfIsFavouriteByUser,
};
