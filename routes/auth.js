//ruta para autenticar usuario
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authController = require("../contollers/authController");
const auth = require("../middleware/auth");

//api/auth
//Registra usuario

router.post("/",
    authController.autenticarUsuario
);

//Obtiene el usuario autenticado
router.get("/",
    auth,
    authController.usuarioAutenticado
);

module.exports = router;