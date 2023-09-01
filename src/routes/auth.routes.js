const authRoutes = require("express").Router();
const UserController = require("../controllers/users.controller");
const { verifyEmail, verifyEmailToCreateUser, hashPassword, verifyPassword } = require("../middlewares/users.middleware");

authRoutes.post("/register", verifyEmailToCreateUser, hashPassword, UserController.createUser);
authRoutes.post("/login", verifyEmail, verifyPassword, UserController.login)

module.exports = authRoutes;