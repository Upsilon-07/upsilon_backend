const userRoutes = require("express").Router();
const UserController = require("../controllers/users.controller");
const { verifyToken } = require("../middlewares/users.middleware");

//* get user info using token
//* endpoint: /user
userRoutes.get("/", verifyToken, UserController.getUserInfo)


module.exports = userRoutes