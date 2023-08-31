const authRoutes = require("./auth.routes")
// import routes

const setupRoutes = (server) => {
//   server.use("<endpoint>", <route>);
    server.use("/auth", authRoutes);
};

module.exports = { setupRoutes };
