
const repository = require('../repositories/items.repository');
const validateErros = require('../../helpers/request_validations');
const { returnRequestError, returnUnknowServerError, returnSuccessfullRes } = require('../../helpers/responses');
const { parseListItemsFromMeliResponse, parseItemFromMeliResponse } = require('../services/meli_api_parse');
/**
 * Realiza el llamada a la api de mercadolibre y retorna
 * items
 * @returns Request
 */
const getItemsList = async ( req, res ) => {

  const error = validateErros(req);
  if ( error ) return returnRequestError(res, error);

  const query = req.query.q;
  const limit = req.query.limit;
  const apiMeliResponse = await repository.getListItems(query, limit)
  if ( apiMeliResponse ) {
    const bodyResponse = parseListItemsFromMeliResponse(apiMeliResponse)

    return returnSuccessfullRes(res, bodyResponse);
  }else{
    return returnUnknowServerError(res);
  }
}

/**
 * Realiza un llamado a dos endpoints de MELI para obtener
 * la inforamción de un Item
 * @returns Request
 */
 const getItem = async ( req, res ) => {

  const error = validateErros(req);
  if ( error ) return returnRequestError(res, error);

  const query = req.params.id;
  const apiMeliResponse = await repository.getItemInformation(query)
  
  if ( apiMeliResponse.item ) {

    const { item, itemDescription } = apiMeliResponse;

    const itemCategories = await repository.getCategory( item?.category_id )
    
    const bodyResponse = parseItemFromMeliResponse(item, itemDescription, itemCategories)

    return returnSuccessfullRes(res, bodyResponse);
  }else{
    return returnUnknowServerError(res);
  }
}


module.exports = {
  getItemsList,
  getItem
}