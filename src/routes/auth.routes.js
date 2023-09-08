const authRoutes = require("express").Router();
const userController = require("../controllers/users.controller");
const { verifyEmail, verifyEmailToCreateUser, hashPassword, verifyPassword } = require("../middlewares/users.middleware");

authRoutes.post("/register", verifyEmailToCreateUser, hashPassword, userController.createUser);
authRoutes.post("/login", verifyEmail, verifyPassword, userController.login)

module.exports = authRoutes;