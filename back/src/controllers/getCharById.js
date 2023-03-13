const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

async function getCharById(req, res) {
    try {
        const { id } = req.params;
        const character = await axios.get(URL + id);
        const char = {
                    id: character.data.id,
                    name: character.data.name, 
                    image: character.data.image, 
                    gender: character.data.gender, 
                    species: character.data.species
                };
        res.status(200).json(char);
    } catch (error) {
        res.status(500).json(error.message)
    }
    // const { id } = req.params;
    // axios.get(URL + id)
    // .then((response) => response.data)
    // .then((data) => {
    //     const char = {
    //         id: data.id,
    //         name: data.name, 
    //         image: data.image, 
    //         gender: data.gender, 
    //         species: data.species
    //     };
    //     res.status(200).json(char);
    // })
    // .catch((error) => {
    //     res.status(500).json(error.message);
    // })
}

module.exports = getCharById;