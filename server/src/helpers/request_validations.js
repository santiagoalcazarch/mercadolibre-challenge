
const { validationResult } = require('express-validator');

/**
 * @param {*} req Request enviado por el usuario
 * @returns Objeto "Errors" si algúna validación previamente establecida
 * (en la ruta como middleware) no es correcta
 */
const validateErros = ( req ) => {
  const errors = validationResult(req);
  if ( !errors.isEmpty() ){
    return {
      message: "Invalid request",
      errors: errors
    }
  }
}

module.exports = validateErros;