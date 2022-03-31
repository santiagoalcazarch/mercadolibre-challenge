
import { shallow } from "enzyme";
import Item from "../../Item/Item";

describe('Item component test', () => { 

  const item = {
    condition: "new",
    free_shipping: true,
    id: "MCO854837339",
    location: "Bogotá D.C.",
    picture: "http://http2.mlstatic.com/D_613152-MLA47073710736_082021-I.jpg",
    price: {currency: "COP", amount: 773500, decimals: 0},
    title: "Impresora de buena calidad"
  }

  const wrapper = shallow( <Item item={item} /> );

  test('Debería hacer match con el snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debería desplegar el precio del item', () => {
    const itemPrice = new Intl.NumberFormat('es-CO', { 
      style: 'currency', 
      currency: item.price.currency,
      maximumFractionDigits: 0,
      minimumFractionDigits: 0
    }).format( item.price.amount );

    const priceText = wrapper.find('.item-price-tx span').text().trim();
    expect(priceText).toBe(itemPrice);
  })

  test('Debería desplegar la información del item correctamente', () => {

    const itemTitle = wrapper.find('.item-desc-tx span').text().trim();
    expect(itemTitle).toBe(item.title);

    const itemLocation = wrapper.find('.item-location').text().trim();
    expect(itemLocation).toBe(item.location);

    const freeShippingIcon = wrapper.find('.shipping-icon').exists();
    expect(freeShippingIcon).toBe(true);
  })

  test('Debería no desplegar la imagen de [free_shipping]', () => {

    const itemWithoutFreeShipping = { ...item, free_shipping: false }

    const wrapperFresS = shallow( <Item item={itemWithoutFreeShipping} /> );

    const freeShippingIcon = wrapperFresS.find('.shipping-icon').exists();

    expect(freeShippingIcon).toBe(false);
  })

})