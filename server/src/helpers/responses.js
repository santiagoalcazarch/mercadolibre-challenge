

/**
 * Retorna una respuesta fallida ante un error en la solicitud (request) del cliente.
 * Recibe como parametro el objeto [error] que proporciona la biblioteca "express-validators"
 * @param {*} res - Objeto "Response" de la solicitud (request) 
 * @param {*} error express-validator error
 * @returns Respuesta fallida 
 */
const returnRequestError = (res, error) => res.status(400).json(error)


/**
 * Retorna una respuesta fallida ya que ocurrió un error en la llamada al API
 * @param {*} res - Objeto "Response" de la solicitud (request) 
 * @returns 
 */
const returnUnknowServerError = (res) => res.status(500).json({ error: "Internal Server Error - Failed request" })


/**
 * Retorna una respuesta exitosa al usuario
 * @param {*} res - Objeto "Response" de la solicitud (request) 
 * @param {*} body - Body para enviar al usuario
 * @returns 
 */
const returnSuccessfullRes = (res, body) => res.status(200).json(body)

module.exports = {
  returnRequestError,
  returnUnknowServerError,
  returnSuccessfullRes
}