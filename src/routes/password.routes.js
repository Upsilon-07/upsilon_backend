const passwordRoutes = require("express").Router()

const passwordController = require("../controllers/password.controller")

const { verifyEmail, verifyToken, verifyPassword, hashPassword } = require("../middlewares/users.middleware");


//* change password
//* endpoint: /password/change-password
passwordRoutes.post("/change-password", verifyToken, verifyPassword, hashPassword, passwordController.changePassword)

//* forget password
//* endpoint: /password/forget-password
passwordRoutes.post("/forget-password", verifyEmail, passwordController.forgetPassword)

module.exports = passwordRoutes