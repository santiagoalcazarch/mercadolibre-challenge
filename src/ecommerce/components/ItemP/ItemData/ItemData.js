import React from 'react'
import PropTypes from 'prop-types'
import BlueButton from '../../../../shared/components/Buttons/BlueButton'


const ItemData = props => {
  return (
    <div className="item-l-data">
      <div className="item-l-state-sold"> vendidos </div>
      <div className="item-l-name"> precio </div>
      <div className="item-l-price"> nombre </div>

      <BlueButton
        child="Comprar"
      />
    </div>
  )
}

ItemData.propTypes = {}

export default ItemData