// import routes
const courseRouter = require("./course.routes")

const setupRoutes = (server) => {
//   server.use("<endpoint>", <route>);
server.use("/courses",courseRouter)
};

module.exports = { setupRoutes };
