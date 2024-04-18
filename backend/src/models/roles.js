const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

// Define el modelo roles
const Roles = sequelize.define('roles', {
  nombre: {
    type: Sequelize.STRING(50),
    allowNull: false
  }
}, {
  timestamps: false // Agregar timestamps
});

module.exports = Roles;