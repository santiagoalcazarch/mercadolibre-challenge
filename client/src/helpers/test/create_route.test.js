import { getRouteWithQueryParams } from "../create_route"
import '@testing-library/jest-dom';

describe('Create route test', () => { 

  test('Debe retornar un stirng con una ruta, basado en un objeto', () => {

    const anyRoute = "https://example.com/any/route";
    const param = {  q: "consulta", limit: 10 }
    const result = getRouteWithQueryParams(anyRoute, param);

    expect(result).toBe("https://example.com/any/route?q=consulta&limit=10");
  })
  
})