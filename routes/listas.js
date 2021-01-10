const express = require("express");
const router = express.Router();
const listasController = require("../contollers/listasController");
const auth = require("../middleware/auth");

//crea una lista de peliculas
//api/listas
router.post("/",
    auth,
    listasController.crearLista
);


router.get("/",
    auth,
    listasController.obtenerPeliculas
)

router.delete("/:id",
    auth,
    listasController.eliminarPelicula
)


module.exports = router;