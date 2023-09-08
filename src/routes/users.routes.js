const usersRoutes = require("express").Router();
const userController = require("../controllers/users.controller");
const { verifyToken } = require("../middlewares/users.middleware");

usersRoutes.get("/", verifyToken, userController.getUserInfo);

module.exports = usersRoutes;
