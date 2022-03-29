
import { getRouteWithQueryParams } from "../../helpers/create_route"
import excecuteFetch from "../../helpers/fetch";
import { GET_ITEMS } from "./items.routes";

const _ITEMS_LIMIT = 4;

/**
 * Realiza el llamado al API para obtener y retornar
 * el resultado de la petición
 * @param {string} query 
 * @returns Respuesta API
 */
const getListOfItems = async ( query ) => {

  const api_route = getRouteWithQueryParams( 
    GET_ITEMS, 
    { q: query, limit: _ITEMS_LIMIT } 
  );

  try {
    const response = await excecuteFetch({ route: api_route, method: 'GET'});
    const body = await response.json();
    return body;
  } catch (error) {
    return;
  }
}

export const itemService = {
  getListOfItems,
}