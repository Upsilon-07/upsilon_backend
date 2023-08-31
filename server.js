const express = require("express");
require("dotenv").config()

const { setupRoutes} = require("./src/routes/index.routes")

const port = process.env.PORT;

const server = express();

server.use(express.json())


setupRoutes(server)

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
