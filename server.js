const express = require("express");

const server = express();

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
