// import routes
const courseRouter = require("./course.routes")

const setupRoutes = (server) => {
//   server.use("<endpoint>", <route>);
server.use("/courses",courseRouter)
server.use("/courses/:id",courseRouter)
};

module.exports = { setupRoutes };
