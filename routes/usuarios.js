
const {Router} = require('express');
const {check} = require('express-validator');
const router = Router();
const { listarUsuarios, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios');
const {validarCampos} = require('../middlewares/validar-campos');
const { validarRol, emailExiste, validarIdUsuario } = require('../helpers/db-validator');


router.get('/',listarUsuarios);

router.post('/',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('correo','El correo no es valido').not().isEmpty().isEmail(),
    check('correo').custom(emailExiste),
    check('password','El password debe tener mas de 6 letras').isLength({min:6}),
    check('rol').custom(validarRol),
    validarCampos
],usuariosPost);

router.put('/:id',[
    check('id','no es un id valido').isMongoId(),
    check('id').custom(validarIdUsuario),
    check('rol').custom(validarRol),
    validarCampos
],usuariosPut);

router.delete('/:id',[
    check('id','no es un id valido').isMongoId(),
    check('id').custom(validarIdUsuario),
    validarCampos
],usuariosDelete);

router.patch('/',usuariosPatch);

module.exports = router;