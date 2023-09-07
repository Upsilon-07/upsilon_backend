const express = require("express");
require('dotenv').config()
const cors = require("cors")
const { setupRoutes } = require("./src/routes/index.routes")

const port = process.env.PORT;

const server = express();

server.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  })
);

server.get("/", (req,res)=>{
  res.send("Welcome to the server")
})

server.use(express.json())


setupRoutes(server)

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
