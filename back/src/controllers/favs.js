let favs = require("../utils/favs");

function postFav(req, res) {
    let match = favs.find((char) => Number(char.id) === Number(req.body.id));
    if (!match){
        favs.push(req.body);
        res.status(200).json(req.body);
    } else res.status(400).send("ya esta ese personaje");
};

function getFavs() {
    res.status(200).json(favs);
};

function deleteFav() {
    const { id } = req.params;
    const nuevo = favs.filter((char) => char.id !== Number(id));
    if (nuevo.length === favs.length) {
        res.status(400).json({error: "ah fallado la operacion"});
    } else {
        favs = nuevo;
        res.status(200).send("borrado con exito");
    }
};


module.exports = {
    postFav,
    getFavs,
    deleteFav
};