
import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom";
import { requestState } from "../../../../../helpers/request_states";

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import ItemLayout from "../../ItemLayout/ItemLayout";

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const storeInitState = {
  items: {
    itemsList: { categories: [], items: [] },
    itemInfo: { categories: [], item: {} },
    requestState: requestState.FAILED
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
        <MemoryRouter initialEntries={["/item/MCO3423423"]}> 
          <ItemLayout />
        </MemoryRouter>
      </Provider>
    )
    expect(wrapper).toMatchSnapshot();
  });

  test('Debería mostrar un mensaje de error ante una petición fallida', () => {
    const wrapper = mount( 
      <Provider store={store}>
        <MemoryRouter initialEntries={["/item/MCO3423423"]}> 
          <ItemLayout />
        </MemoryRouter>
      </Provider>
    )

    const errorMsj = wrapper.find("p").text().trim();
    expect(errorMsj).toBe("Ha ocurrido un error obteniendo la información :(")
  });

  test('Debería mostrar el spinner que indica [cargando]', () => {

    store = mockStore({
      items: {
        itemInfo: { categories: [], item: {} },
        requestState: requestState.LOADING
      }
    });

    const wrapper = mount( 
      <Provider store={store}>
        <MemoryRouter initialEntries={["/item/MCO3423423"]}> 
          <ItemLayout />
        </MemoryRouter>
      </Provider>
    )

    const loadingSpinner = wrapper.find(".spinner-border").exists();
    expect(loadingSpinner).toBeTruthy();
  });

  test('Debería mostrar la información de un item', () => {

    store = mockStore({
      items: {
        itemInfo: { categories: [], item: {
          id: "MCO3423",
          title: "iPhone 13", 
          price: {
            currency: "COP", 
            amount: 12000, 
          },
          picture: "",
          condition: "new", 
          free_shipping: true, 
          sold_quantity: 12,
          description: "lorem ipsum dolor sit amet, consect"
        } },
        requestState: requestState.SUCCESS
      }
    });

    const wrapper = mount( 
      <Provider store={store}>
        <MemoryRouter initialEntries={["/item/MCO3423423"]}> 
          <ItemLayout />
        </MemoryRouter>
      </Provider>
    )

    const itemImage = wrapper.find(".item-l-img-container").exists();
    const itemData = wrapper.find(".item-l-data-content").exists();
    const itemDesc = wrapper.find(".item-l-data-description").exists();

    expect(itemImage && itemData && itemDesc).toBeTruthy();
  });

});