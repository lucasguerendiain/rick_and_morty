const http = require("http");
const fs = require("fs");
const getCharById = require("./controllers/getCharById");
const getCharDetail = require("./controllers/getCharDetail");
const PORT = 3001;

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const id = req.url.split("/").pop();
    if (req.url.includes("onsearch")) {
        getCharById(res, id);
    } else if (req.url.includes("detail")) {
        getCharDetail(res, id);
    } else {
        res
        .writeHead(404, { "Content-Type" : "text/plain" })
        .end("Route not found");
    }
}).listen(PORT, "localhost");
