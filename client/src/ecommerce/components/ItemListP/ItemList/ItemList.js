
import React from 'react'
import PropTypes from 'prop-types'
import Item from '../Item/Item'
import { Link } from 'react-router-dom'
import { ITEM } from '../../../../routes/routes'

const ItemList = ({ itemList }) => {

  return (
    <div className="item-list-container">
      <div className="item-list-content">
        {
          itemList.map((item) =>
            <div className="item-list-item">
              <Link to={ITEM}>
                <Item item={item} />
                <div class="item-divider"></div>
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