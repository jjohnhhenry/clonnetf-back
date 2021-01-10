const Listas = require("../modells/Listas");

exports.crearLista = async (req, res) => {

    try {
        //crear una nueva lista
        const lista = new Listas(req.body);

        //guarda el usuario de la lista
        lista.usuario = req.usuario.id;

        //guardamos el proyecto
        lista.save();
        res.json(lista);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

//Obtiene todos las peliculas de lista del usuario actual
exports.obtenerPeliculas = async (req, res) => {
    try {
        const listas = await Listas.find({ usuario: req.usuario.id });
        res.json({ listas });
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

//Elimina una película de la lista
exports.eliminarPelicula = async (req, res) => {
    try {
        //revisar el id de la pelicula
        let pelicula = await Listas.findById(req.params.id);
        

        //si la pelicula existe o no
        if(!pelicula){
            return res.status(404).json({ msg:"Pelicula no hallada" });
        }
        
        //Eliminar pelicula de Lista
        await Listas.findOneAndRemove({ _id:req.params.id });
        res.json({ msg:"Pelicula Eliminada de Lista"})

        
    } catch (error) {
        console.log(error);
        res.status(500).send("Error en el servidor")
    }
}