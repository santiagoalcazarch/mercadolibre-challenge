
/**
 * Crear servidor y escuchar peticiones
 */

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');

// Crear el servidor de express
const app = express();

// CORS
app.use(cors())

// Lectura y parseo del body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Importación de rutas
const router = require('./routes/index');

// Rutas
app.use('/api', router );


// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});