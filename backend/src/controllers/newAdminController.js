const Usuario = require('../models/usuario');

async function convertirAdministrador(req, res) {
    try {
        // Verificar si el usuario que envía la solicitud tiene rol 2 (administrador)
        const { id_usuario_solicitante } = req.body;
        const solicitante = await Usuario.findByPk(id_usuario_solicitante);
        if (!solicitante || solicitante.id_rol !== 2) {
            return res.status(401).json({ error: 'No tienes permiso para realizar esta acción' });
        }

        // Obtener el ID del usuario que se va a convertir en administrador
        const { id_usuario_a_modificar } = req.body;

        // Buscar al usuario que se va a modificar
        const usuarioModificar = await Usuario.findByPk(id_usuario_a_modificar);
        if (!usuarioModificar) {
            return res.status(404).json({ error: 'El usuario a modificar no existe' });
        }

        // Cambiar el rol del usuario a administrador (id_rol = 2)
        usuarioModificar.id_rol = 2;
        await usuarioModificar.save();

        res.json({ mensaje: 'El usuario ha sido convertido en administrador exitosamente' });
    } catch (error) {
        console.error('Error al convertir usuario en administrador:', error);
        res.status(500).json({ error: 'Error al convertir usuario en administrador' });
    }
}

module.exports = {
    convertirAdministrador
};
