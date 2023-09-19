const usersRoutes = require("express").Router();
const userController = require("../controllers/users.controller");
const { verifyToken } = require("../middlewares/users.middleware");

usersRoutes.get("/", verifyToken, userController.getUserInfo);

// Update user information
//* endpoint: /user/:id
usersRoutes.put("/:id", verifyToken, userController.editUserInfo)
// 

usersRoutes.delete("/:id", verifyToken, userController.deleteUserToken)

module.exports = usersRoutes;
