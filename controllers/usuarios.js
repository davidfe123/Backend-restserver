
const {response} = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');




const listarUsuarios = async (req,res = response)=>{

    const {limite = 5,desde = 0} = req.query;
    const query = {estado:true}


    const [total,usuarios] =  await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
        .skip(Number(desde))
        .limit(Number(limite))

    ]);

    res.json({
        total,
        usuarios
    })
}



const usuariosPost = async (req,res = response)=>{

    const {
        nombre,correo,
        password,rol
    } = req.body;

    const usuario = new Usuario({nombre,correo,password,rol});

    //Encriptar password
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password,salt);

    //guardar base de datos
    await usuario.save();

    res.json({
        msg:'metodo Post usuarios',
        usuario
    })
}


const usuariosPut =  async (req,res = response)=>{

    const {id} = req.params;
    const {_id,password,google,correo, ...resto} = req.body;

    //Validar contra db

    if(password){
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password,salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json({
        msg:'metodo put usuarios',
        usuario
    })
}

const usuariosDelete = async (req,res = response)=>{

    const {id}= req.params;
    const usuarioEliminado = await Usuario.findByIdAndUpdate(id , {estado:false});
    
    res.json({
        id,
        usuarioEliminado
    })

}

const usuariosPatch = (req,res=response)=>{
    res.json({
        msg:'metodo patch usuarios'
    })
}
module.exports = {
    listarUsuarios,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}