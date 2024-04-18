const Sequelize = require('sequelize');
const { database } = require('../config/config');

// Configuración de la conexión a la base de datos MySQL
const sequelize = new Sequelize(database.database, database.user, database.password, {
  host: database.host,
  dialect: 'mysql',
  username: database.user, 
  password: database.password, 
  database: database.database, 
  host: database.host, 
  dialect: 'mysql', 
});

module.exports = sequelize;
