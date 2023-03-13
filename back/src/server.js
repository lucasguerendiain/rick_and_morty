const express = require("express");
const server = express();
const router = require("../src/routes/index");
const PORT = 3001;

var corsMiddleware = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //Autorizo recibir solicitudes de este dominio
    res.header('Access-Control-Allow-Credentials', true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //Autorizo recibir solicitudes con dichos hedears
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
    next();
};

server.use(corsMiddleware);
server.use(express.json());
server.use("/rickandmorty", router);

server.listen(PORT, () => {
    console.log('Server raised in port ' + PORT);
});
