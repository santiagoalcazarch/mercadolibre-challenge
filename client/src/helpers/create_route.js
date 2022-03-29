

/**
 * Retorna una cadena de texto con el fin de optimizar la
 * creación de query params en una ruta
 * @param {string} route 
 * @param {object || array} params Object or array
 * @returns Cadena de texto con la ruta y los parametros
 */
export const getRouteWithQueryParams = ( route, params ) => {

  const queryParams = new URLSearchParams(params).toString();

  return route + "?" + queryParams;
}