const Sequelize = require('sequelize');
const sequelize = require('./sequelize');
const Rol = require('./roles');

const Usuario = sequelize.define('usuario', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fecha_ingreso: {
    type: Sequelize.DATE,
    allowNull: false
  },
  nombre: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  salario: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
  correo: {
    type: Sequelize.STRING(100),
    allowNull: false,
    unique: true 
  },
  contraseña: {
    type: Sequelize.STRING(100),
    allowNull: false
  }
}, {
  timestamps: false, 
  freezeTableName: true 
});

// Definir una relación de clave externa con el modelo de roles
Usuario.belongsTo(Rol, { foreignKey: 'id_rol' });

module.exports = Usuario;
