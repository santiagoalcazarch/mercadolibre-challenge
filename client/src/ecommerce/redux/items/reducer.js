import { requestState } from "../../../helpers/request_states";
import { itemsTypes } from "./types"

const itemsListInit = { categories: [], items: [] };
const itemInfoInit = { categories: [], item: {} }

const _initialState = {
  itemsList: itemsListInit,
  itemInfo: itemInfoInit,
  requestState: requestState.INIT
}

export const itemsReducer = (state = _initialState, action) => {

  switch (action.type) {

    case itemsTypes.setListOfItems:
      return {
        ...state,
        requestState: requestState.SUCCESS,
        itemsList: action.payload,
      }

    case itemsTypes.setItem:
      return {
        ...state,
        requestState: requestState.SUCCESS,
        itemInfo: action.payload,
      }

    case itemsTypes.setRequestState:
      return {
        ...state,
        requestState: action.payload,
      }

    case itemsTypes.cleanList:
      return {
        ...state,
        requestState: requestState.INIT,
        itemsList: itemsListInit,
        itemInfo: itemInfoInit
      }

    default:
      return state;
  }
}