const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const loginController = require('../controllers/loginController');
const newAdminController = require('../controllers/newAdminController');


//ruta para registrar empleados
router.post('/registro', [
    check('correo').isEmail().withMessage('El correo no es válido'),
    check('contraseña').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),
    check('fecha_ingreso').notEmpty().withMessage('La fecha de ingreso es requerida'),
    check('nombre').notEmpty().withMessage('El nombre es requerido'),
    check('salario').isNumeric().withMessage('El salario debe ser un valor numérico').notEmpty().withMessage('El salario es requerido'),
], usuariosController.registrarUsuario);

//ruta para login de usuario
router.post('/login', [
    check('correo').isEmail().withMessage('El correo no es válido'),
    check('contraseña').notEmpty().withMessage('La contraseña es requerida'),
], loginController.loginUsuario);

// Ruta para convertir un usuario en administrador
router.post('/convertir-administrador', newAdminController .convertirAdministrador);

// Ruta para eliminar usuario
router.delete('/eliminar', usuariosController.eliminarUsuario);


module.exports = router;
