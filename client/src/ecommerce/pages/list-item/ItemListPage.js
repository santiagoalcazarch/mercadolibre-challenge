

import React from 'react'
import PropTypes from 'prop-types'
import ItemList from '../../components/ItemListP/ItemList/ItemList'

const ListItemPage = props => {
  return (
    <div>
      <ItemList itemList={[1, 2, 3]} />
    </div>
  )
}

ListItemPage.propTypes = {}

export default ListItemPage