

const parseListItemFromMeliResponse = ( response ) => {
  return {
    author: _getSignature(),
    categories: _getCategoriesFromListItems(response.filters),
    items: _getItems(response.results)
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
 * Get name of categories <String>, from MELI response
 * @param {array} filters 
 */
const _getCategoriesFromListItems = ( filters ) => {
  let categories = [];
  if( filters ){

    for (let i = 0; i < filters.length; i++) {
      
      // If the object has all the required properties
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
 * Get data of each item from MELI response
 * @param {array} results 
 * @returns Correctly formatted object
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


module.exports = {
  parseListItemFromMeliResponse
};