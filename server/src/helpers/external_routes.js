
const API_MELI = "https://api.mercadolibre.com/";
const MELI_ZONE = "MCO";

const API_MELI_SEARCH = API_MELI + `sites/${MELI_ZONE}/search`;
const API_MELI_ITEM = (itemId) => API_MELI + "items/"  + itemId;
const API_MELI_ITEM_DESC = (itemId) => API_MELI + "items/" + itemId + "/description";
const API_MELI_ITEM_CATEGORY = (categoryId) => API_MELI + "categories/" + categoryId ;

module.exports = {
  API_MELI_SEARCH,
  API_MELI_ITEM,
  API_MELI_ITEM_DESC,
  API_MELI_ITEM_CATEGORY
}