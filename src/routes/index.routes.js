
// import routes


const courseRouter = require("./course.routes")
const authRouter = require("./auth.routes")
const favouritesRouter = require("./favourites.routes");
const setupRoutes = (server) => {
//   server.use("<endpoint>", <route>);
server.use("/courses",courseRouter)
server.use("/auth", authRouter)
server.use("/favourites", favouritesRouter);

};

module.exports = { setupRoutes };
