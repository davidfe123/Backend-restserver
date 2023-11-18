
const {Schema,model} = require('mongoose');

const SchemaRol = new Schema({
  
    rol:{
        type:String,
        required:[true,'El rol es obligatorio']
    }

});


module.exports = model('ROLE',SchemaRol);