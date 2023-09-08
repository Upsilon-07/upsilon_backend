const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/users.model");

const createUser = (req, res) => {
  // use model to create user
  User.createNewUser(req.body)
    // send response
    .then((results) => {
      if (results.affectedRows > 0) {
        res.status(201).json({
          userEmail: req.body.email,
          userID: results.insertId,
          message: "User created successfully",
        });
      } else {
        res.status(422).send("Unprocessable Entity - unable to process");
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error creating user");
    });
};

const login = (req, res) => {
  const user = req.user;

  if (user && Object.keys(user).length > 0) {
    const { id, email } = user;

    const token = jwt.sign(
      {
        userId: id,
        sub: email,
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 90, // 90 days expiration
      },
      process.env.PRIVATE_KEY
    );

    res.status(200).json({
      message: "success",
      token: token,
    });
  } else {
    res.status(401).send("Invalid credentials");
  }
};

const getUserInfo = (req, res) => {
  const { email } = req.body;

  User.findUserToLogin(email)
    .then((user) => {
      if (user[0] !== null && user[0].email === email) {
        delete user[0].hash_password;
        res.status(200).send(user[0]);
      } else {
        res.status(404).send("User not found with email: " + email);
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving user info from DB");
    });
};

module.exports = {
  createUser,
  login,
  getUserInfo,
};
