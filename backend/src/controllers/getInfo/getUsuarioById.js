const Usuario = require('../../models/usuario');

async function getUsuarioById(req, res) {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la solicitud

        const usuario = await Usuario.findByPk(id); // Buscar el usuario por su ID

        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.json({ usuario }); // Devolver el usuario encontrado
    } catch (error) {
        console.error('Error al obtener usuario por ID:', error);
        res.status(500).json({ error: 'Error al obtener usuario por ID' });
    }
}

module.exports = {
    getUsuarioById
};
