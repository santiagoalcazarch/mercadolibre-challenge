/**
 * Importación de todas las rutas del servidor
 */
const express = require('express')
const router = express.Router();

const itemRoutes = require('../Items/routes/items.routes');

router.use('/items', itemRoutes)

module.exports = router;