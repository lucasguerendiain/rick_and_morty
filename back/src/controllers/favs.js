let favs = require("../utils/favs");

function postFav(req, res) {
    let match = favs.find((char) => Number(char.id) === Number(req.body.id));
    if (!match){
        favs.push(req.body);
        res.status(200).json(favs);
    } else res.status(400).send("ya esta ese personaje");
};

function getFavs(req, res) {
    res.status(200).json(favs);
};

function deleteFav(req, res) {
    const { id } = req.params;
    favs = favs.filter((char) => char.id !== Number(id));
    res.status(200).json(favs);
};


module.exports = {
    postFav,
    getFavs,
    deleteFav
};