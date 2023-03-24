const express = require("express");
const server = express();
const router = require("../src/routes/index");
const { character } = require('./DB_connection');

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

server.get("/rickandmorty/all", async(req, res) => {
    try {
        const allCharacters = character.findAll();
        res.status(201).send(allCharacters);
    } catch (error) {
        res.status(400).json(error.message);
    }
})

module.exports = server;