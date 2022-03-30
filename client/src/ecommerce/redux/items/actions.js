
/**
 * Contiene todas las acciones que puede llamar el usuario
 * desde cualquier parde de la aplicación utilizando el
 * dispatch()
 */

import { requestState } from "../../../helpers/request_states";
import { itemService } from "../../services/items.services";
import { itemsTypes } from "./types";

/**
 * Realiza un llamado al API para obtener
 * una lista de items de acuerdo a una cadena de
 * busqueda y almacenarla la información en
 * el estado [item: itemsList]
 * @param {string} query 
 */
const searchAndSetItemsList = ( query ) => {
  return async ( dispatch ) => {

    dispatch({
      type: itemsTypes.setRequestState,
      payload: requestState.LOADING,
    });

    const list = await itemService.getListOfItems(query);

    if ( list ) {
      dispatch({
        type: itemsTypes.setListOfItems,
        payload: list,
      });
    } else{
      dispatch({
        type: itemsTypes.setRequestState,
        payload: requestState.FAILED,
      });
    }
  }
}

/**
 * Realiza un llamado al API para obtener
 * un item de acuerdo a su ID y almacenarlo en
 * el estado [item: itemInfo]
 * @param {string} itemId 
 */
const searchAndSetItem = ( itemId ) => {
  return async ( dispatch ) => {

    dispatch({
      type: itemsTypes.setRequestState,
      payload: requestState.LOADING,
    });

    const item = await itemService.getItemById(itemId);

    if ( item ) {
      dispatch({
        type: itemsTypes.setItem,
        payload: item,
      });
    } else{
      dispatch({
        type: itemsTypes.setRequestState,
        payload: requestState.FAILED,
      });
    }
  }
}

/**
 * Inicializa el estado global de [item - reducer]
 */
const cleanList = ( ) => {
  return async ( dispatch ) => {
    dispatch({
      type: itemsTypes.cleanList,
    });
  }
}

export const actions = {
  searchAndSetItemsList,
  searchAndSetItem,
  cleanList
}