
/**
 * Retorna un objeto formateado con los parametros establecidos
 * de acuerdo a la repsuesta de MELI
 * @param {object} response Meli response (Objeto lista de items)
 * @returns Objecto correctamente formateado
 */
const parseListItemsFromMeliResponse = ( response ) => {
  return {
    author: _getSignature(),
    categories: _getCategoriesFromListItems(response.filters),
    items: _getItems(response.results)
  }
}

/**
 * Retorna un objeto formateado con los parametros establecidos
 * de acuerdo a la repsuesta de MELI
 * @param {object} item Origen: item Meli endpoint
 * @param {object} itemDescription Origen: item description Meli endpoint
 * @param {object} itemCategories Origen: item category Meli Endpoint
 * @returns Objecto correctamente formateado
 */
 const parseItemFromMeliResponse = ( item, itemDescription, itemCategories ) => {
  return {
    author: _getSignature(),
    categories: _getCategoriesFromItem( itemCategories ),
    item: _getItemFromatted( item, itemDescription )
  }
}

/**
 * @return Author signature
 */
const _getSignature = () => {
  return {
    name: "Santiago",
    lastname: "Alcazar"
  }
}

/**
 * Obtener los nombres de la categorías <String>, 
 * desde la respuesta "Listar" de Meli
 * @param {array} filters 
 */
const _getCategoriesFromListItems = ( filters ) => {
  let categories = [];
  if( filters ){

    for (let i = 0; i < filters.length; i++) {
      
      // Si el objeto contiene las propiedades necesarias
      if ( filters[i].id === "category" && filters[i].values?.length > 0 ) {

        const values = filters[i].values;
        values.forEach( value => {
          const valueCategory = value.path_from_root?.map( category => category?.name )

          if ( valueCategory?.length > 0 ) {
            categories = [
              ...categories,
              ...valueCategory
            ];
          }
        } )
        
        break;
      }
    }
  }
  return categories;
}

/**
 * Obtener los nombres de la categorías <String>, 
 * desde la respuesta "Item" de Meli
 * @param {object} itemCategory 
 */
 const _getCategoriesFromItem = ( itemCategory ) => {
  let categories = [];
  const valueCategory = itemCategory?.path_from_root?.map( category => category?.name )
  if ( valueCategory?.length > 0 ) {
    categories = [ ...valueCategory ];
  }
  return categories;
}

/**
 * Obtiene los datos de cada item desde la repuesta de MELI (Objeto de lista)
 * @param {array} results 
 * @returns Objecto correctamente formateado
 */
const _getItems = ( results ) => {
  let items = [];

  results.forEach( (item) => {
    items.push({
      "id": item.id,
      "title": item.title,
      "price": {
        "currency": item.prices?.presentation?.display_currency, 
        "amount": item.price, 
        "decimals": 0
      },
      "picture": item.thumbnail, 
      "condition": item.condition, 
      "free_shipping": item.shipping?.free_shipping
    })
  })
  return items;
}

/**
 * Obtiene los datos de cada item desde la repuesta de MELI (Objeto de lista)
 * @param {oject} item 
 * @param {oject} itemDescription 
 * @returns Objecto correctamente formateado
 */
 const _getItemFromatted = ( item, itemDescription ) => {

  const picture = item.pictures?.length > 0 
    ? item.pictures[0].url : "";

  try {
    return {
      "id": item.id,
      "title": item.title,
      "price": {
        "currency": item.currency_id,
        "amount": item.price, 
        "decimals": 0
      },
      "picture": picture, 
      "condition": item.condition, 
      "free_shipping": item.shipping?.free_shipping,
      "sold_quantity": item.sold_quantity,
      "description": itemDescription.plain_text
    }
  } catch (error) {
    return undefined;
  }
}


module.exports = {
  parseListItemsFromMeliResponse,
  parseItemFromMeliResponse
};