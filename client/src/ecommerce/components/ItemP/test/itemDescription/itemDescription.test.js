
import { shallow } from "enzyme";
import ItemDescription from "../../ItemDescription/ItemDescription";

describe('ItemDescription component test', () => {

  const itemDescription = "lorem ipsum dolor sit amet, consectetur adipiscing";

  const wrapper = shallow( <ItemDescription itemDescription={itemDescription} /> );

  test('Debería renderizar el componente correctamente', () => { 
    expect(wrapper).toMatchSnapshot();
  });

  test('Debería renderizar el parrafo de la descripción enviada por parametro', () => { 
    const recivedText = wrapper.find("p").text();
    expect(recivedText).toBe(itemDescription);
  });

  test('Debería renderizar como vacío le parrafo de descripción enviada por parametro', () => { 
    const wrapper = shallow( <ItemDescription itemDescription={undefined} /> );

    const recivedText = wrapper.find("p").text();
    expect(recivedText).toBe("");
  });

})