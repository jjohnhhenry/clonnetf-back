const Usuario = require("../modells/Usuario");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken"); 

exports.crearUsuario = async (req, res) => {

    //revisar si hay errores
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()});
    }

    //extraer email y password
    const { email, password } = req.body;

        try {
            //revisar que el usuario registrado sea único
            let usuario = await Usuario.findOne({ email });

            if(usuario){
                return res.status(400).json({ msg: "Usuario registrado con este e-mail ya existe!"});
            }

            //crear el nuevo usuario
            usuario = new Usuario(req.body);

            //hashear el password
            const salt = await bcryptjs.genSalt(10);
            usuario.password = await bcryptjs.hash(password, salt);

            //guardar usuario
            await usuario.save();

            //crear y firmar el jswt
            const payload = {
                usuario: {
                    id:usuario.id
                }
            };

            //firmar el jswt
            jwt.sign(payload, process.env.SECRETA, {
                expiresIn: 3600
            }, (error, token)=>{
                if(error) throw error;

                //Mensaje de confirmación
                res.json({ token });

            });

            //Mensaje de confirmación
            //res.json({ msg: "Usuario creado correctamemnte"});
            
        } catch (error) {
            console.log(error);
            res.status(400).send("Hubo un error");
        }
}