import { requestState } from "../../../helpers/request_states";
import { itemsTypes } from "./types"

const _initialState = {
  itemsList: {
    categories: [],
    items: [],
  },
  item: {},
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

    case itemsTypes.setRequestState:
      return {
        ...state,
        requestState: action.payload,
      }

    default:
      return state;

  }

}