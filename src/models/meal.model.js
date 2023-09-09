const database = require("../database/database-config");

const getall = () => {
  return database
    .query("SELECT * FROM meals")
    .then(([results]) => console.log(results));
};

module.exports = {
  getall,
};
