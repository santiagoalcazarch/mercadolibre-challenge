
const repository = require('../repositories/items.repository');
const validateErros = require('../../helpers/request_validations');
const { returnRequestError, returnUnknowServerError, returnSuccessfullRes } = require('../../helpers/responses');
/**
 * Realiza el llamada a la api de mercadolibre y retorna
 * items
 * @returns Request
 */
const getItems = async ( req, res ) => {

  const error = validateErros(req);
  if ( error ) return returnRequestError(res, error);

  const query = req.query.q;
  const limit = req.query.limit;
  const apiMeliResponse = await repository.getListItems(query, limit)
  if ( apiMeliResponse ) {
    return returnSuccessfullRes(res, apiMeliResponse)
  }else{
    return returnUnknowServerError(res);
  }
}

/**
 * Realiza el llamada a la api de mercadolibre y retorna
 * items
 * @returns Request
 */
 const getItem = async ( req, res ) => {



  return res.status(200).json({ok: "200"});

}


module.exports = {
  getItems,
  getItem
}