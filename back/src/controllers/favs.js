const { favorite } = require('../DB_connection');

async function postFav(req, res) {
    try {
        if (req.body.values().length !== 7) return res.status(400).json({message: "faltan datos"});
        const [char, created] = await favorite.findOrCreate({
            where: req.body
            })
        console.log({char: char.name, creado: created});
    } catch(error) {
        res.status(400).json(error.message);
    }
};

async function getFavs(req, res) {
    try {
        const favs = await favorite.findAll();
        res.status(200).json(favs);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

async function deleteFav(req, res) {
    try {
        const { id } = req.params;
        const victimFav = await favorite.findByPk(id);
        if (victimFav) {
            victimFav.destroy();
            res.status(200).send(victimFav);
        }
        else throw new Error("no existe esto, crack de la vida");
    } catch (error) {
        res.status(400).json(error.message);
    }
};


module.exports = {
    postFav,
    getFavs,
    deleteFav
};