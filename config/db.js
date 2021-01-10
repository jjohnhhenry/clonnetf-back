const monggose = require("mongoose");

require("dotenv").config({path:"variables.env"});

const conectarDB = async () => {
    try {
        await monggose.connect(process.env.DB_MONGO, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        })

        console.log("DB conectada");
        
    } catch (error) {
        console.log(error);
        process.exit(1);//en caso de error detener app
    }
}

module.exports = conectarDB;