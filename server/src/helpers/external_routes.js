
const API_MELI = "https://api.mercadolibre.com/sites/MCO";

const API_MELI_SEARCH = API_MELI + "/search";
const API_MELI_ITEM = (itemId) => API_MELI + "/items/"  + itemId;
const API_MELI_ITEM_DESC = (itemId) => API_MELI + "/items/" + itemId + "/description"; ;

module.exports = {
  API_MELI_SEARCH,
  API_MELI_ITEM,
  API_MELI_ITEM_DESC
}