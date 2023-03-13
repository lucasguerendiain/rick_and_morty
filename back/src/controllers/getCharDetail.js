const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

function getCharDetail(req, res) {
    const { detailId } = req.params;
    axios.get(URL + detailId)
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
        res.status(200).json(char);
    })
    .catch((error) => {
        res.status(500).json(error.message);
    })
}

module.exports = getCharDetail;