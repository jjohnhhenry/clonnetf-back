const mongoose = require("mongoose");

const ProyectoSchema = mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario"
    },
    accion: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Peliculaslike", ProyectoSchema);