const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator'); 
const config = require('../config/config'); 
const secret = config.SECRET_KEY;
const Usuario = require('../models/usuario');

async function registrarUsuario(req, res) {
    try {
        // Verificar si hay errores de validación en la solicitud
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Extraer los datos de la solicitud
        const { correo, contraseña, fecha_ingreso, nombre, salario } = req.body;
        const id_rol = 1; // Definir el valor predeterminado para el rol

        // Verificar si el correo ya está registrado
        const usuarioExistente = await Usuario.findOne({ where: { correo } });
        if (usuarioExistente) {
            return res.status(400).json({ error: 'El correo ya está registrado' });
        }

        // Hashear la contraseña
        const hashContraseña = await bcrypt.hash(contraseña, 10);

        // Crear el usuario en la base de datos
        const nuevoUsuario = await Usuario.create({ correo, contraseña: hashContraseña, fecha_ingreso, nombre, salario, id_rol });

        // Generar un token JWT
        const token = jwt.sign({ id: nuevoUsuario.id, correo: nuevoUsuario.correo }, secret, { expiresIn: '1h' });

        // Enviar el token como respuesta
        res.json({ token });
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ error: 'Error al registrar usuario' });
    }
}

async function eliminarUsuario(req, res) {
    try {
        const { id_usuario_solicitante, id_usuario_a_eliminar } = req.body;

        // Verificar si el usuario solicitante tiene permisos para eliminar usuarios
        const usuarioSolicitante = await Usuario.findByPk(id_usuario_solicitante);
        if (!usuarioSolicitante || usuarioSolicitante.id_rol !== 2) {
            return res.status(403).json({ error: 'No tienes permisos para realizar esta acción' });
        }

        // Verificar si el usuario a eliminar existe en la base de datos
        const usuarioAEliminar = await Usuario.findByPk(id_usuario_a_eliminar);
        if (!usuarioAEliminar) {
            return res.status(404).json({ error: 'El usuario a eliminar no existe' });
        }

        // Eliminar el usuario de la base de datos
        await usuarioAEliminar.destroy();

        res.json({ mensaje: 'Usuario eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        res.status(500).json({ error: 'Error al eliminar usuario' });
    }
}

module.exports = {
    registrarUsuario, eliminarUsuario
};
