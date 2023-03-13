const {Router} = require("express");
const { postFav, getFavs, deleteFav } = require("../controllers/favs");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);
router.post("/fav", postFav);
router.get("/fav", getFavs);
router.delete("/fav/:id", deleteFav);


module.exports = router;