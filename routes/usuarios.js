
const {Router} = require('express');
const router = Router();
const { listarUsuarios, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios');

router.get('/',listarUsuarios);

router.put('/',usuariosPut);

router.post('/',usuariosPost);

router.delete('/:id',usuariosDelete);

router.patch('/',usuariosPatch);

module.exports = router;