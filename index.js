const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");

//Creando el servidor
const app = express();

//Conectar la base de datos
conectarDB();

//Habilitar cors
app.use(cors());

//habilitar express.json
app.use(express.json({ extended: true }));

//Puerto de la app
const port = process.env.port || 4000;

//importar rutas
app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/listas", require("./routes/listas"));
app.use("/api/peliculas", require("./routes/peliculaslike"));

//arrancar la app
app.listen(port, "0.0.0.0", () => {
    console.log("El servidor está funcionando en el puerto "+port);
});



