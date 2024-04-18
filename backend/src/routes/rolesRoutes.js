const express = require('express');
const router = express.Router();
const Roles = require('../models/roles');

router.get('/', async (req, res) => {
  try {
    const roles = await Roles.findAll();
    res.json(roles);
  } catch (error) {
    console.error('Error al obtener roles:', error);
    res.status(500).json({ error: 'Error al obtener roles' });
  }
});

module.exports = router;
