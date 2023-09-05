const usersRoutes = require("express").Router();
const UserController = require("../controllers/users.controller");
const { verifyToken } = require("../middlewares/users.middleware");

usersRoutes.get("/", verifyToken, UserController.getUserInfo);

module.exports = usersRoutes;
