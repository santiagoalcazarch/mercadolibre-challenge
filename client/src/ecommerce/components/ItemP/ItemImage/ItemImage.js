
import React from 'react'
import PropTypes from 'prop-types';
import Img from "./test.png";

const ItemImage = ({}) => {
  return (
    <div>
      <div className="item-l-img">
        <img src={Img} />
      </div>
    </div>
  )
}

ItemImage.propTypes = {}

export default ItemImage