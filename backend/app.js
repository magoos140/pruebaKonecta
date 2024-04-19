require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const app = express();

// Parsear application/json
app.use(bodyParser.json());

// Habilitar CORS 
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN 
}));

// Importar rutas
const rolesRoutes = require('./src/routes/rolesRoutes');
const usuariosRoutes = require('./src/routes/usuariosRoutes');
const getInfoRoutes = require('./src/routes/getInfoRoutes');

// Usar las rutas
app.use('/roles', rolesRoutes); 
app.use('/usuarios', usuariosRoutes);
app.use('/login', usuariosRoutes);
app.use('/eliminar', usuariosRoutes);
app.use('/get', getInfoRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});
