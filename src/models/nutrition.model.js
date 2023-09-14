const database = require("../database/database-config");

const getByMealId = (id) => {
    return database
      .query("SELECT * FROM nutrition where meal_id = ?", [id])
      .then(([results]) => results);
  };
  
  
  
  module.exports = {
    getByMealId,
  };