
import React from 'react'
import PropTypes from 'prop-types'

const ItemDescription = props => {
  return (
    <div className="item-l-desc-content mt-4">
      <div>
        <h3> Descripción del producto </h3>
      </div>
      <p className="item-l-description">
        lorem
      </p>
    </div>
  )
}

ItemDescription.propTypes = {}

export default ItemDescription