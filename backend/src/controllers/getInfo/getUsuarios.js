const Usuario = require('../../models/usuario');

async function getUsuarios(req, res) {
    try {
        const usuarios = await Usuario.findAll();

        if (!usuarios || usuarios.length === 0) {
            return res.status(404).json({ error: 'No se encontraron usuarios' });
        }

        res.json({ usuarios });
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
}
module.exports = {
    getUsuarios
};
