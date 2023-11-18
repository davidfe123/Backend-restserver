

const mongoose = require('mongoose');

const dbdConnection = async ()=>{
    try {
        
        await mongoose.connect(process.env.MONGODB_CNN,{
            autoIndex:true
        });


        console.log('corriendo db');

    } catch (error) {
        console.log(error)
        throw new Error('error a la hora de iniciar la base de datos');
    }
}

module.exports = {
    dbdConnection
}