
import { shallow } from "enzyme";
import ItemList from "../../ItemList/ItemList";
import { items, itemsEmpty } from "./itemList.mock";

describe('ItemList component test', () => { 

  const wrapper = shallow( <ItemList itemList={items} /> );

  test('Debería hacer match con el snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debería mostar todos los items', () => {
    // length validation
    const itemsMappged = wrapper.find(".item-list-item");
    expect(itemsMappged.length).toBe(items.length);

    // Keys validation
    const renderedItemsKeys = itemsMappged.map( item => item.key() );
    const baseItemsKeys = items.map( item => item.id );
    expect(renderedItemsKeys).toEqual(baseItemsKeys);    
  });

  test('Debería desplegar mensaje de error', () => {
    const wrapperListEmpty = shallow( <ItemList itemList={itemsEmpty} /> );
    const existMessage = wrapperListEmpty.find("MessageBox").exists();
    expect(existMessage).toBe(true);
  });

})