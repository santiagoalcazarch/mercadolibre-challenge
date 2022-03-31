import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom";
import { useDispatch } from 'react-redux';

import SearchInput from "../../SearchBar/SearchInput"
import SearchBar from "../../SearchBar/SearchBar";

jest.mock("react-redux");

describe('Search-bar test', () => {

  const initSearch = "iphone";

  test('Debería hacer match con el snapshot', () => {
    const wrapper = mount( 
      <MemoryRouter> 
        <SearchInput />
      </MemoryRouter>
    )
    expect(wrapper).toMatchSnapshot();
  })

  test('Debería tener como valor inicial el paramentro enviado', () => {
    const wrapper = mount( 
      <MemoryRouter> 
        <SearchInput serachInitValue={initSearch}/>
      </MemoryRouter>
    )
    const inputValue = wrapper.find('input').prop("value");
    expect(inputValue).toBe(initSearch)
  });

  test('Debería tener como valor inicial el paramentro desde la ruta', () => {

    const dispatchJ = jest.fn();
    useDispatch.mockReturnValue(dispatchJ)

    const wrapper = mount( 
      <MemoryRouter initialEntries={["/items?search=impresora"]}>
        <SearchBar />  
      </MemoryRouter>
    )
    const inputValue = wrapper.find('input').prop("value");
    
    expect(inputValue).toBe("impresora");
    expect(dispatchJ).toHaveBeenCalled();
  });

  test('Debería no tener ningun valor inicial si no esta en la ruta de "itemsList"', () => {

    const dispatchJ = jest.fn();
    useDispatch.mockReturnValue(dispatchJ)

    const wrapper = mount( 
      <MemoryRouter initialEntries={["/item?search=impresora"]}>
        <SearchBar />  
      </MemoryRouter>
    )
    const inputValue = wrapper.find('input').prop("value");
    
    expect(inputValue).toBe("");
    expect(dispatchJ).not.toHaveBeenCalled();
  });
})
