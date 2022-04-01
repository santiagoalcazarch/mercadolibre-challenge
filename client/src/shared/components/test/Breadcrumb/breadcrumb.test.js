import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom";
import { LIST_ITEM } from "../../../../routes/routes";
import Breadcrumb from "../../Breadcrumb/Breadcrumb";
import { requestState } from "../../../../helpers/request_states";

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from "react-redux";

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const storeInitState = {
  items: {
    itemsList: { categories: [], items: [] },
    itemInfo: { categories: [], item: {} },
    requestState: requestState.INIT
  }
}

let store = mockStore(storeInitState);

describe('Breadcrumb test', () => {

  beforeEach( () => {
    store = mockStore(storeInitState);
  })

  test('Debería hacer match con el snapshot', () => {
    const wrapper = mount( 
      <Provider store={store}>
        <MemoryRouter initialEntries={[`${LIST_ITEM}`]}> 
          <Breadcrumb />
        </MemoryRouter>
      </Provider>
    )
    expect(wrapper).toMatchSnapshot();
  });

  test('Debería renderizar las categorias - ItemList', async () => {

    let cateogriesList = ["any", "category"];
    store = mockStore({
      items: {
        itemsList: { categories: cateogriesList, items: [] },
        itemInfo: { categories: [], item: {} },
        requestState: requestState.INIT
      }
    });
    
    const wrapper = mount( 
      <Provider store={store}>
        <MemoryRouter initialEntries={["/items?search=impresora"]}> 
          <Breadcrumb />
        </MemoryRouter>
      </Provider>
    )

    const categoriesRenderTest = wrapper.find(".breadcrumb-item").map( 
      ( category ) => category.find("a span").text().trim()
    )

    expect(categoriesRenderTest).toEqual(cateogriesList);
  });

  test('Debería renderizar las categorias - Item', async () => {

    let cateogriesList = ["any", "category"];
    store = mockStore({
      items: {
        itemsList: { categories: [], items: [] },
        itemInfo: { categories: cateogriesList, item: {} },
        requestState: requestState.INIT
      }
    });
    
    const wrapper = mount( 
      <Provider store={store}>
        <MemoryRouter initialEntries={["/items/MCO432343"]}> 
          <Breadcrumb />
        </MemoryRouter>
      </Provider>
    )

    const categoriesRenderTest = wrapper.find(".breadcrumb-item").map( 
      ( category ) => category.find("a span").text().trim()
    )

    expect(categoriesRenderTest).toEqual(cateogriesList);
  });

});
