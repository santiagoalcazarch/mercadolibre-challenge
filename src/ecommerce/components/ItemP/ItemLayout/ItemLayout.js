
import React from 'react'
import PropTypes from 'prop-types'
import ItemData from '../ItemData/ItemData'
import ItemImage from '../ItemImage/ItemImage'
import ItemDescription from '../ItemDescription/ItemDescription'

const ItemLayout = props => {
  return (
    <div className="item-l-container">
      <div className="item-l-content">

        <div className="c-row">
          <div>
            <ItemImage />

            <ItemDescription />
          </div>
          
          <div className="item-l-data-content">
            <ItemData />
          </div>
        </div>

      </div>
    </div>
  )
}

ItemLayout.propTypes = {}

export default ItemLayout