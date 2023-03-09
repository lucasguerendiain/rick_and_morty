const axios = require("axios");

const getCharDetail = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then((data) => {
        const char = {
            id: data.id,
            name: data.name, 
            image: data.image, 
            gender: data.gender, 
            species: data.species,
            status: data.status,
            origin: data.origin && data.origin.name
        };
        res
            .writeHead(200, {"Content-Type" : "application/json"})
            .end(JSON.stringify(char));
    })
    .catch((error) => {
        res
            .writeHead(500, {"Content-Type" : "text/plain"})
            .end(error.message);

    })

}

module.exports = getCharDetail;