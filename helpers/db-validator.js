

const Role = require('../models/role');
const Usuario = require('../models/usuario');


const validarRol = async (rol = '')=>{
        const existeRol = await Role.findOne({rol});
        if(!existeRol) {
            throw new Error(`El rol ${rol} no esta registrado en la base de datos`);
        }
}

const emailExiste = async (correo = '')=>{
    
    // Verificar si el correo existe

    const emailUsuarioDb = await Usuario.findOne({correo});
    if(emailUsuarioDb){
        throw new Error(`el correo ${correo} ya existe`);
    }
}

const validarIdUsuario = async (id )=>{
    const idDb = await Usuario.findById(id);
    if(!idDb){
        throw new Error(`no existe usuario con el id ${id}`);
    }
}

module.exports ={
    validarRol,
    emailExiste,
    validarIdUsuario
}