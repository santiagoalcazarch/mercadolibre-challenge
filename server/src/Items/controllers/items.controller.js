
const repository = require('../repositories/items.repository');
const validateErros = require('../../helpers/request_validations');
const { returnRequestError, returnUnknowServerError, returnSuccessfullRes } = require('../../helpers/responses');
const { parseListItemFromMeliResponse } = require('../services/meli_api_parse');
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
    const bodyResponse = parseListItemFromMeliResponse(apiMeliResponse)

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
  const apiMeliResponse = await repository.getItem(query)
  
  if ( apiMeliResponse ) {
    const { itemResp, ItemDescRespo } = apiMeliResponse;
    // const bodyResponse = parseListItemFromMeliResponse(apiMeliResponse)

    return returnSuccessfullRes(res, bodyResponse);
  }else{
    return returnUnknowServerError(res);
  }
}


module.exports = {
  getItemsList,
  getItem
}