import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import Shipping from '../../../../shared/assets/icons/ic_shipping@2x.png'

const Item = ({ item }) => {

  const itemPrice = useMemo(() => 
    new Intl.NumberFormat('es-CO', { 
      style: 'currency', 
      currency: item.price?.currency,
      maximumFractionDigits: 0
    }).format( item.price?.amount )
  , [item.price]);
  
  return (
    <div className="item-container c-row">
      <div className="item-data col-sm-10">
        <div className="item-data-container d-flex align-items-top">
          <div className="item-image">
            <img src={item.picture} alt={item.title} />
          </div>
          <div className="item-data-desc ml-2 my-3">
            <div className="item-price-tx c-row">
              <div> { itemPrice } </div>
              {
                item.free_shipping && (
                  <div className="shipping-icon mx-3"> <img src={Shipping} alt="Free shipping" /> </div>
                )
              }
            </div>
            <div className="item-desc-tx">
              <span> { item.title } </span>
            </div>
          </div>
        </div>
      </div>
      <div className="item-location col-sm-2">
      { item.location }
      </div>
    </div>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired
}

export default Item