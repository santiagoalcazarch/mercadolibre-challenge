import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { requestState } from '../../../../helpers/request_states';
import { actions } from '../actions';

import { itemService } from '../../../services/items.services';
import { itemsTypes } from '../types';
jest.mock("../../../services/items.services");

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const storeInitState = {
  items: {
    itemsList: { categories: [], items: [] },
    itemInfo: { categories: [], item: {} },
    requestState: requestState.INIT
  }
}
let store = mockStore(storeInitState)

describe('Test redux actions - Items', () => {  

  beforeEach( () => {
    store = mockStore(storeInitState);
  })

  test('Debería guardar en el store el resultado del API - ItemsList', async () => {
    const apiObj = {
      categories: ["any", "category"], 
      items: [
        { id: "MCO12342", title: "Impresora"},
        { id: "MCO12342", title: "Impresora Asus"},
      ]
    };
    const getListOfItemsJ = Promise.resolve(apiObj);
    itemService.getListOfItems.mockReturnValue(getListOfItemsJ);

    await store.dispatch( actions.searchAndSetItemsList() );
    const actionsStore = store.getActions();

    expect(actionsStore[1]).toEqual({
      type: itemsTypes.setListOfItems,
      payload: apiObj
    })
  });

  test('Debería guardar en el store el resultado del API - Items', async () => {
    const apiObj = {
      categories: ["any", "category"], 
      item: { id: "MCO12342", title: "Impresora"},
    };
    const getItemByIdJ = Promise.resolve(apiObj);
    itemService.getItemById.mockReturnValue(getItemByIdJ);

    await store.dispatch( actions.searchAndSetItem() );
    const actionsStore = store.getActions();

    expect(actionsStore[1]).toEqual({
      type: itemsTypes.setItem,
      payload: apiObj
    })
  });

  test('Debería guardar en el estado que hay una petición fallida - ItemsList', async () => {
    
    const getListOfItemsJ = Promise.resolve();
    itemService.getListOfItems.mockReturnValue(getListOfItemsJ);

    await store.dispatch( actions.searchAndSetItemsList() );
    const actionsStore = store.getActions();

    expect(actionsStore[1]).toEqual({
      type: itemsTypes.setRequestState,
      payload: requestState.FAILED
    })
  });

  test('Debería guardar en el estado que hay una petición fallida - Items', async () => {
    
    const getItemByIdJ = Promise.resolve();
    itemService.getItemById.mockReturnValue(getItemByIdJ);

    await store.dispatch( actions.searchAndSetItemsList() );
    const actionsStore = store.getActions();

    expect(actionsStore[1]).toEqual({
      type: itemsTypes.setRequestState,
      payload: requestState.FAILED
    })
  });

})