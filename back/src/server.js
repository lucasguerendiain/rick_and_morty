const express = require("express");
const server = express();
const router = require("../src/routes/index");
const cors = require("cors");
const PORT = 3001;


server.use(express.json());
server.use(cors());
server.use("/rickandmorty", router);

server.listen(PORT, () => {
    console.log('Server raised in port ' + PORT);
});
