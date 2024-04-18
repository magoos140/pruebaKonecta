const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const config = require('../config/config');
const secret = config.SECRET_KEY;
const Usuario = require('../models/usuario');

async function loginUsuario(req, res) {
    try {
        // Verificar si hay errores de validación en la solicitud
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Extraer los datos de la solicitud
        const { correo, contraseña } = req.body;

        // Verificar si el usuario existe en la base de datos
        const usuario = await Usuario.findOne({ where: { correo } });
        if (!usuario) {
            return res.status(400).json({ error: 'Credenciales inválidas' });
        }

        // Verificar si la contraseña es correcta
        const contraseñaValida = await bcrypt.compare(contraseña, usuario.contraseña);
        if (!contraseñaValida) {
            return res.status(400).json({ error: 'Credenciales inválidas' });
        }

        // Generar un token JWT
        const token = jwt.sign({ id: usuario.id, correo: usuario.correo }, secret, { expiresIn: '1h' });

        // Enviar el token y el ID del usuario como respuesta
        res.json({ id: usuario.id, token });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
}


module.exports = {
    loginUsuario
};
