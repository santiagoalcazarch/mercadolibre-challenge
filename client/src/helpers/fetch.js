
import { BASE_URL } from "../config/api/api_routes";

function excecuteFetch({ route, method, headers, ...others }) {
  const config = {
    method,
    headers: headers ? headers : new Headers(),
    ...others
  };
  const request = new Request(BASE_URL + route, config);
  return fetch(request);
}
  
export default excecuteFetch;
