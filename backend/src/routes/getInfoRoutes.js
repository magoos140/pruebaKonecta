const express = require('express');
const router = express.Router();
const getUsuariosController = require('../controllers/getInfo/getUsuarios');
const getUsuarioById = require('../controllers/getInfo/getUsuarioById');

router.get('/all-users', getUsuariosController.getUsuarios);
router.get('/:id', getUsuarioById.getUsuarioById);

module.exports = router;
