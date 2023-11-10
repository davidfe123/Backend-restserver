
const {response} = require('express');

const listarUsuarios = (req,res = response)=>{
    res.json({
        msg:'metodo get usuarios'
    })
}

const usuariosPost = (req,res = response)=>{

    const body = req.body;

    res.json({
        msg:'metodo Post usuarios',
        body
    })
}

const usuariosPut = (req,res = response)=>{
    res.json({
        msg:'metodo put usuarios'
    })
}

const usuariosDelete = (req,res = response)=>{

    const params = req.query;

    res.json({
        msg:'metodo delete usuarios',
        id,
        nombreParams
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