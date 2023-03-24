const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");
const { character } = require('../DB_connection');

async function getApiData() {
    try {
        let apiData = [];
        for (let i = 1; i < 6; i++) {
            const pageChars = await axios(`https://rickandmortyapi.com/api/character?page=${i}`);
            const datosPulidos = pageChars.data.results.map(charact => {
                return {
                id: charact.id,
                name: charact.name, 
                image: charact.image, 
                gender: charact.gender, 
                species: charact.species,
                status: charact.status,
                origin: charact.origin.name
                };
            });
            apiData = [...apiData, ...datosPulidos];
        }
        return apiData;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function saveApiData() {
    /*try {
        const characters = await getApiData();
        await character.bulkCreate(characters);
    } catch (error) {
        throw new Error(error.message);
    }*/
    const characters = await getApiData();
    characters.forEach(async (char) => {
        try {
            const [c, created] = await character.findOrCreate({
                where: char,
            })
            //console.log({char: c.name, creado: created});
        } catch (error) {
            throw new Error(error.message);
        }
    });
}

module.exports = saveApiData;