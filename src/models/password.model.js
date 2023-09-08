const database = require("../database/database-config");

const change = (hash_password, email) => {
  return database
    .query("UPDATE users SET  hash_password = ? WHERE email = ?", [
      hash_password,
      email,
    ])
    .then(([results]) => results);
};

module.exports = {
  change,
};