const http = require("http");
const fs = require("fs");
var characters = require("./utils/data.js");

const PORT = 3001;

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes("rickandmorty/character")) {
        const id = req.url.split("/").pop();
        let char = characters.filter(char => char.id === Number(id));
        res
        .writeHead(200 ,{ "Content-Type" : "application/json" })
        .end(JSON.stringify(char[0]));
        return
    }
    res
    .writeHead(404, { "Content-Type" : "text/plain" })
    .end("Route not found");
}).listen(PORT, "localhost");
