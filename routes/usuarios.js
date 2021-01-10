//ruta para crear usuario
const express = require("express");
const router = express.Router();
const usuarioContraller = require("../contollers/usuarioController");
const { check } = require("express-validator");

//Crea un usuario

//api/usuarios
router.post("/",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("email", "Agrega un email válido").isEmail(),
        check("password", "El password debe ser mínimo de 6 caracteres").isLength({ min:6 })
    ],
    usuarioContraller.crearUsuario
);

module.exports = router;