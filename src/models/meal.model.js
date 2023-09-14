const database = require("../database/database-config");

const getall = () => {
  return database
    .query("SELECT * FROM meals")
    .then(([results]) => results);
};

const getMealById = (id) => {
  // console.log("id", id);
  return database
  .query("SELECT * FROM meals WHERE id=?", id)
  .then(([results]) => results);
};


module.exports = {
  getall,
  getMealById,
};
