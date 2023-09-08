const usersRoutes = require("express").Router();
const UserController = require("../controllers/users.controller");
const { verifyToken } = require("../middlewares/users.middleware");

usersRoutes.get("/", verifyToken, UserController.getUserInfo);


// Update user information
//* endpoint: /user/:id
usersRoutes.put("/:id", UserController.editUserInfo)

module.exports = usersRoutes;
