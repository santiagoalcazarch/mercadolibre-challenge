
import React from 'react'
import PropTypes from 'prop-types'
import Item from '../Item/Item'
import { Link } from 'react-router-dom'
import { ITEM_FUNC } from '../../../../routes/routes'
import MessageBox from '../../../../shared/components/Message-box/Message_box'

/**
 * Permite mostrar la lista de items, cual se 
 * recibe como parametro
 * @param {array} itemList 
 * @returns 
 */
const ItemList = ({ itemList }) => {

  /**
   * Si la lista se encuentra vacía, despliega un mensaje
   */
  if ( itemList.length === 0 ) {
    return (
      <MessageBox
        title="¡Ups!"
        description="No hemos encontrado ningún articulo"
      />
    )
  }

  return (
    <div className="item-list-container">
      <div className="item-list-content">
        {
          itemList.map((item) =>
            <div className="item-list-item" key={item.id}>
              <Link to={ITEM_FUNC(item.id)}>
                <Item item={item} />
                <div className="item-divider"></div>
              </Link>
            </div>
          )
        }
      </div>
    </div>
  )
}

ItemList.propTypes = {
  itemList: PropTypes.array.isRequired
}

export default ItemList