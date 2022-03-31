
import React from 'react'
import PropTypes from 'prop-types'

/**
 * Muestra la descripción de un item en particular
 */
const ItemDescription = ({ itemDescription }) => {
  return (
    <div className="item-l-desc-content mt-4">
      <div>
        <h3> Descripción del producto </h3>
      </div>
      <p className="item-l-description">
        { itemDescription ?? "" }
      </p>
    </div>
  )
}

ItemDescription.propTypes = {
  itemDescription: PropTypes.string
}

export default ItemDescription