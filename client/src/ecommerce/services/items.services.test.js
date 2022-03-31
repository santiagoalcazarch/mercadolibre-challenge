import '@testing-library/jest-dom';
import { itemService } from './items.services';
import excecuteFetch from "../../helpers/fetch";
jest.mock("../../helpers/fetch")

describe('Item services test' , () => {

  describe('getItemsList test', () => {

    test('Debería retornar exitosamente un objeto con la lista de items', async (  ) => { 

      const item = { 
        items: [{id: "MCO3423", title: "Una impresora"}],
        categories: ["any", "category"]
      }
  
      const jsonJest = jest.fn( () => Promise.resolve(item));
      const responseMockValue = { ok: true, json: jsonJest }
      excecuteFetch.mockReturnValue( responseMockValue )
  
      const response = await itemService.getListOfItems("impresora");
  
      expect(jsonJest).toHaveBeenCalled();
      expect(response).toEqual(item);
    });
  
    test('Debería retornar indefinido ante un error en la petición', async (  ) => { 
  
      excecuteFetch.mockRejectedValueOnce( new Error("Internet conection") )
  
      const response = await itemService.getListOfItems("impresora");
      expect(response).toBeUndefined();
    });
  
    test('Debería retornar indefinido ante una petición HTTP fallida', async (  ) => { 
  
      const responseMockValue = { ok: false }
      excecuteFetch.mockReturnValue( responseMockValue )
  
      const response = await itemService.getListOfItems("impresora");
      expect(response).toBeUndefined();
    });
  });

  
  describe('getItem test', () => {

    test('Debería retornar exitosamente la información', async (  ) => { 

      const itemInfo = { 
        items: {id: "MCO3423", title: "Una impresora"},
        categories: ["any", "category"]
      }
  
      const jsonJest = jest.fn( () => Promise.resolve(itemInfo));
      const responseMockValue = { ok: true, json: jsonJest }
      excecuteFetch.mockReturnValue( responseMockValue )
  
      const response = await itemService.getItemById("MCO232312");
  
      expect(jsonJest).toHaveBeenCalled();
      expect(response).toEqual(itemInfo);
    });
  
    test('Debería retornar indefinido ante un error en la petición', async (  ) => { 
  
      excecuteFetch.mockRejectedValueOnce( new Error("Internet conection") )
  
      const response = await itemService.getItemById("MCO232312");
      expect(response).toBeUndefined();
    });
  
    test('Debería retornar indefinido ante una petición HTTP fallida', async (  ) => { 
  
      const responseMockValue = { ok: false }
      excecuteFetch.mockReturnValue( responseMockValue )
  
      const response = await itemService.getItemById("MCO232312");
      expect(response).toBeUndefined();
    });

  });

})