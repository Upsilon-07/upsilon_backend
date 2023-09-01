// import routes
const courseRouter = require("./course.routes");
const favouritesRouter = require("./favourites.routes");

const setupRoutes = (server) => {
  //   server.use("<endpoint>", <route>);
  server.use("/courses", courseRouter);
  server.use("/favourites", favouritesRouter);
};

module.exports = { setupRoutes };
