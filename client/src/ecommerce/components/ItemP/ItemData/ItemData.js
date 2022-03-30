import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import BlueButton from '../../../../shared/components/Buttons/BlueButton'
import { itemCondition as itemConditionEnum } from '../../../../helpers/condition_states'

/**
 * Muestra datos como el valor, el titulo y el estado de 
 * un Item
 */
const ItemData = ({ item }) => {

  const itemCondition = useMemo(() => {
    return itemConditionEnum[item.condition];
  }, [item.condition]);

  const itemPrice = useMemo(() => 
    new Intl.NumberFormat('es-CO', { 
      style: 'currency', 
      currency: item.price?.currency,
      maximumFractionDigits: 0
    }).format( item.price?.amount )
  , [item.price]);

  return (
    <div className="item-l-data">
      <div className="item-l-state-sold"> { itemCondition ? (itemCondition + " - ") : "" } 234 vendidos </div>
      <div className="item-l-name"> { item.title } </div>
      <div className="item-l-price"> { itemPrice } </div>

      <BlueButton
        child="Comprar"
      />
    </div>
  )
}

ItemData.propTypes = {
  item: PropTypes.any.isRequired
}

export default ItemData