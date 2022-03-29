import { requestState } from "../../../helpers/request_states";
import { itemService } from "../../services/items.services";
import { itemsTypes } from "./types";

/**
 * Realiza un [disptach] para llamar al API y
 * establecer en el estado global, la respuesta a
 * esta petición 
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

export const actions = {
  searchAndSetItemsList
}