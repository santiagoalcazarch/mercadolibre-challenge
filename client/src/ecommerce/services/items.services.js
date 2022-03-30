/**
 * Contiene la interacción de la aplicación con 
 * la cada de acceso a datos o llamadas al API
 */

import { getRouteWithQueryParams } from "../../helpers/create_route"
import excecuteFetch from "../../helpers/fetch";
import { GET_ITEM, GET_ITEMS } from "./items.routes";

const _ITEMS_LIMIT = 4;

/**
 * Realiza el llamado al API para obtener y retornar
 * una lista de items basado en el string [query]
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
    if ( response.ok ){
      const body = await response.json();
      return body;
    }else{
      return;
    }
  } catch (error) {
    return;
  }
}

/**
 * Realiza el llamado al API para obtener y retornar
 * un item basado en su Id
 * @param {string} query 
 * @returns Respuesta API
 */
 const getItemById = async ( itemId ) => {

  const api_route = GET_ITEM(itemId)

  try {
    const response = await excecuteFetch({ route: api_route, method: 'GET'});
    if ( response.ok ){
      const body = await response.json();
      return body;
    }else{
      return;
    }
  } catch (error) {
    return;
  }
}

export const itemService = {
  getListOfItems,
  getItemById
}