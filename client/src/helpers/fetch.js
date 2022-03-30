
import { BASE_URL } from "../config/api/api_routes";

/**
 * Ejecuta y retorna la función [fetch] para realizar un llamado HTTP(s)
 * @param {string} route - Ruta a la que será dirigído el Fetch
 * @param {string} method - Metodo del fetch
 * @param {object} headers - Header del fetch
 * @param {any} others - Cualquier otra propiedad para agregar al fetch 
 * @returns 
 */
function excecuteFetch({ route, method, headers, ...others }) {
  const config = {
    method,
    headers: headers ? headers : new Headers(),
    ...others
  };
  const request = new Request(BASE_URL + route, config);
  return fetch(request);
}
  
export default excecuteFetch;
