const authRoutes = require('express').Router()
const UserController = require("../controllers/users.controller")
const { verifyEmailExists, hashPassword } = require("../middlewares/users.middleware")

//* Create a new user
//* endpoint: /auth/sign-up
authRoutes.post("/sign-up", verifyEmailExists, hashPassword, UserController.createUser)

//* Login with a user
//* endpoint: /auth/login

module.exports = authRoutes