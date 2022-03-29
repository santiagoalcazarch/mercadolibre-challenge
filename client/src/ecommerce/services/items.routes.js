
/**
 * @returns Ruta para obtener una lista de items
 */
export const GET_ITEMS = 'items'

/**
 * @param {string} itemId 
 * @returns Ruta para obtener un item
 */
export const GET_ITEM = (itemId) => `items/${itemId}`