
/**
 * Rutas de Items
 * host + /api/items
 */
const express = require('express');
const { query, param } = require('express-validator');


const router = express.Router();

// Importación del controlador de las rutas
const itemsController = require('../controllers/items.controller')

/**
 * Path: /api/items - /api/items?q=""
 * @returns Lista de items del API de mercadolibre
 */
router.get(
  '/', 
  [ 
    query('q').trim().isLength({min: 1}).withMessage("Invalid query"),
    query('limit').isInt({ min: 1, max: 100 }).withMessage("Invalid limit")
  ],
  itemsController.getItemsList
);


/**
 * Path: /api/items/:id 
 * @returns Item específico del API de mercadolibre
 */
router.get(
  '/:id', 
  [
    param('id').isLength({min: 1}).withMessage("Invalid id")
  ],
  itemsController.getItem
);


module.exports = router;
