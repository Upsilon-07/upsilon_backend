const authRoutes = require("./auth.routes")
// import routes
const courseRouter = require("./course.routes")

const setupRoutes = (server) => {
//   server.use("<endpoint>", <route>);
    server.use("/auth", authRoutes);
server.use("/courses",courseRouter);
};

module.exports = { setupRoutes };
