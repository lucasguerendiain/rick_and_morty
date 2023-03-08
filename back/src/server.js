var http = require("http");
var fs = require("fs");
var data = require("./utils/data.js");

const PORT = 3001;

module.exports = 
    http.createServer((req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (req.url.includes("rickandmorty/character")) {
            let id = req.url.split("/").pop();
            /*fs.readFile(__dirname + "/utils/data.js", "utf-8", (err, data) => {
                if (err) {
                    res.writeHead(404, { "Content-Type" : "text/plain" });
                    res.end("Route not found");
                }
                let char = data.filter((char) => char.id === id);
                res.writeHead(200 ,{ "Content-Type" : "application/json" });
                res.end(char);
            });*/
            let char = data.filter(char => char.id == id);
            res.writeHead(200 ,{ "Content-Type" : "application/json" });
            res.end(JSON.stringify(char));
            return
        }
        res.writeHead(404, { "Content-Type" : "text/plain" });
        res.end("Route not found");
    }).listen(PORT, "localhost");
