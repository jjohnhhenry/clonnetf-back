const express = require("express");
const router = express.Router();
const peliculasController = require("../contollers/peliculasController");
const auth = require("../middleware/auth");

//crea peliculas que gustan al usuario
//api/peliculas
router.post("/",
    auth,
    peliculasController.peliculasLike
)

router.get("/",
    auth,
    peliculasController.obtenerPeliculaslike
)

router.put("/",
    auth,
    peliculasController.actualizaPeliculaslike
)

module.exports = router;