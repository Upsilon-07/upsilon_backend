const database = require("../database/database-config");

const createNewUser = (user) => {
  return database
    .query("INSERT INTO users SET ?", user)
    .then(([results]) => results);
};

const findUserByEmail = (email) => {
  return database
    .query("SELECT email FROM users WHERE email = ?", email)
    .then(([results]) => results);
};

const findUserToLogin = (email) => {
  return database
    .query("SELECT * FROM users WHERE email = ?", email)
    .then(([results]) => results);
};



module.exports = {
  createNewUser,
  findUserByEmail,
  findUserToLogin,
};