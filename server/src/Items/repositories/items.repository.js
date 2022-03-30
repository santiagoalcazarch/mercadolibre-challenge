
const axios = require('axios');
const api_routes = require('./../../helpers/external_routes');

const getListItems = async ( query, limit ) => {
  try {
    const response = await axios.get(`${api_routes.API_MELI_SEARCH}?q=${query}&limit=${limit}`)
    return response.data;
  } catch (error) {
    return undefined;
  }
}

const getItemInformation = async ( itemId ) => {
  let itemInfo = {};
  try {
    const item = await axios.get( api_routes.API_MELI_ITEM(itemId) )
    itemInfo.item = item.data;
    const itemDescription = await axios.get( api_routes.API_MELI_ITEM_DESC(itemId) )
    itemInfo.itemDescription = itemDescription.data;
  } catch (error) {}
  return itemInfo;
}

const getCategory = async ( categoryId ) => {
  try {
    const response = await axios.get( api_routes.API_MELI_ITEM_CATEGORY(categoryId) );
    return response.data;
  } catch (error) {
    return undefined;
  }
}

module.exports = {
  getListItems,
  getItemInformation,
  getCategory
}