
import { shallow } from "enzyme";
import ItemData from "../../ItemData/ItemData";

describe('ItemData component test', () => {

  const item = {
    "id": "MCO3423",
    "title": "iPhone 13", 
    "price": {
      "currency": "COP", 
      "amount": 12000, 
    },
    "picture": "",
    "condition": "new", 
    "free_shipping": true, 
    "sold_quantity": 12,
    "description": "lorem ipsum dolor sit amet, consect"
  }

  const wrapper = shallow( <ItemData item={item} /> );

  test('Debería renderizar el componente correctamente', () => { 
    expect(wrapper).toMatchSnapshot();
  });

  test('Debería mostrar los datos del item', () => { 

    const soldTest = wrapper.find('.item-l-state-sold').text();
    expect(soldTest).toBe("Nuevo - 12 vendidos");

    const numberFormat = new Intl.NumberFormat('es-CO', { 
      style: 'currency', 
      currency: item.price.currency,
      maximumFractionDigits: 0,
      minimumFractionDigits: 0
    }).format( item.price.amount );

    const itemPrice = wrapper.find('.item-l-price').text().trim();
    expect(itemPrice).toBe( numberFormat );

    const itemTitle = wrapper.find('.item-l-name').text().trim();
    expect(itemTitle).toBe(item.title);
  });

  test('Ante un estado de un item desconocido, debería no mostrar ese estado', () => { 

    const itemWithWrongCondition = { ...item }
    itemWithWrongCondition.condition = "anycondition"
    const wrapper = shallow( <ItemData item={itemWithWrongCondition} /> );

    const soldTest = wrapper.find('.item-l-state-sold').text();
    expect(soldTest).toBe("12 vendidos");
  });

})