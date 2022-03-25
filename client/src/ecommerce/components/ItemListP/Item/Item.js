

import React from 'react'
import PropTypes from 'prop-types'
import imgTest from "./img.test.png";
import Shipping from '../../../../shared/assets/icons/ic_shipping@2x.png'

const Item = ({ item }) => {
  return (
    <div className="item-container c-row">
      <div className="item-data col-sm-10">
        <div className="item-data-container c-row align-items-top">
          <div className="item-image">
            <img src={imgTest}  />
          </div>
          <div className="item-data-desc ml-2 my-3">
            <div className="item-price-tx c-row">
              <div>$ 1.980</div>
              <div className="shipping-icon mx-3"> <img src={Shipping} alt="Free shipping" /> </div>
            </div>
            <div className="item-desc-tx">
              <span>Apple ipod touch 5g 16gb negro igual a nuev completo unico</span>
            </div>
          </div>
        </div>
      </div>
      <div className="item-location col-sm-2">
        Algun estado
      </div>
    </div>
  )
}

Item.propTypes = {}

export default Item