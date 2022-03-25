
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

module.exports = {
  getListItems,
}