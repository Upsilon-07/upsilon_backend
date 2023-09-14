// import routes

const courseRouter = require("./course.routes");
const authRouter = require("./auth.routes");
const usersRouter = require("./users.routes");
const favouritesRouter = require("./favourites.routes");
const passwordRoutes = require("./password.routes")
const mealRouter = require("./meal.routes");
const lessonRouter = require("./lesson.routes");
const exerciseRouter = require("./exercise.routes")
const nutritionRouter = require("./nutrition.routes")


const setupRoutes = (server) => {
  //   server.use("<endpoint>", <route>);
  server.use("/courses", courseRouter);
  server.use("/auth", authRouter);
  server.use("/favourites", favouritesRouter);
  server.use("/user", usersRouter);
  server.use("/password", passwordRoutes);
  server.use("/meals", mealRouter);
  server.use("/lesson",lessonRouter)
  server.use("/exercise",exerciseRouter)
  server.use("/nutrition", nutritionRouter)
};

module.exports = { setupRoutes };
