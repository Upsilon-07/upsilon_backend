// import routes

const courseRouter = require("./course.routes");
const authRouter = require("./auth.routes");
const usersRouter = require("./users.routes");
const favouritesRouter = require("./favourites.routes");
const lessonRouter = require("./lesson.routes");

const setupRoutes = (server) => {
  //   server.use("<endpoint>", <route>);
  server.use("/courses", courseRouter);
  server.use("/auth", authRouter);
  server.use("/favourites", favouritesRouter);
  server.use("/user", usersRouter);
  server.use("/lesson",lessonRouter)
};

module.exports = { setupRoutes };
