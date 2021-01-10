const mongoose = require("mongoose");

const ProyectoSchema = mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario"
    }
})

module.exports = mongoose.model("Listas", ProyectoSchema);