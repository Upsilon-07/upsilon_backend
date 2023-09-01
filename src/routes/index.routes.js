// import routes
const courseRouter = require("./course.routes")
const authRoutes = require("./auth.routes")
const passwordRoutes = require("./password.routes")
const userRoutes = require("./user.routes")
const setupRoutes = (server) => {
//   server.use("<endpoint>", <route>);
server.use("/courses",courseRouter)
server.use("/auth", authRoutes)
server.use("/user", userRoutes);
server.use("/password", passwordRoutes);
};

module.exports = { setupRoutes };
