
/**
 * Se encuentran todos los "Strings" de las rutas
 * para estandarizar su llamado y uso
 */

export const HOME = "/";

export const LIST_ITEM = "/items";

export const ITEM = "/items/:id";
export const ITEM_FUNC = (itemId) => `/items/${itemId}`;