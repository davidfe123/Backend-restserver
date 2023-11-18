
const cors = require('cors');
const express = require('express');
const { dbdConnection } = require('../database/config.js');


class Server{
    constructor(app){
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioRoutePath = '/api/usuarios';

        //conexxion base de datos
        this.conectarDb();

        // Middelwares
        this.middelwares();
        

        // retas de mi app

        

        this.routes()
    }

    async conectarDb(){
        await dbdConnection();
    }

    middelwares(){
        //CORS
        this.app.use(cors());
        //directorio publico
        this.app.use( express.static('public'));
        //lectura y parceo
        this.app.use(express.json());
    }

    routes(){

        this.app.use(this.usuarioRoutePath, require('../routes/usuarios.js'));

    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`server corriendo en puerto `,this.port);
        })
        
    }

}

module.exports = Server