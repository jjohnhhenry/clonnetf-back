const { response } = require("express");
const Peliculaslike = require("../modells/Peliculaslike");


exports.peliculasLike = async (req, res) => {
    try {
        //Crear una nueva pelicula like
        const peliculalike = new Peliculaslike(req.body);

        //guarda el usuario de las peliculas like
        peliculalike.usuario = req.usuario.id;

        peliculalike.save();
        res.json(peliculalike);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.obtenerPeliculaslike = async (req, res) => {

    try {
        const peliculaslike = await Peliculaslike.find({ usuario: req.usuario.id });
        res.json ({ peliculaslike });
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }

}

exports.actualizaPeliculaslike = async (req, res) => {
    
    const { id, accion } = req.body;
    const peliculaLike = {};
    
    if(accion) {
        peliculaLike.accion = accion;
    }

    try {
        //revisa el id
        let likePelicula = await Peliculaslike.find({ id:id });
 

        if(!likePelicula) {
            return res.status(404).json({msg: "No encontrado"})
        }

        likePelicula = await Peliculaslike.findOneAndUpdate({id: id}, {$set:peliculaLike}, {new:true});
        res.json({likePelicula});

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}