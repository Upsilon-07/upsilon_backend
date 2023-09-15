const usersRoutes = require("express").Router();
const userController = require("../controllers/users.controller");
const { verifyToken } = require("../middlewares/users.middleware");

usersRoutes.get("/", verifyToken, userController.getUserInfo);

// Update user information
//* endpoint: /user/:id
usersRoutes.put("/:id", verifyToken, userController.editUserInfo)
// 
// Add middlewares para verificar se o user existe e se se o body existe

module.exports = usersRoutes;
