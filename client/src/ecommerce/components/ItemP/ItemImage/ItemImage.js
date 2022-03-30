
import React from 'react'
import PropTypes from 'prop-types';

const ItemImage = ({ imageSrc, alt }) => {

  return (
    <div className="item-l-img">
      <img src={imageSrc} alt={alt} />
    </div>
  )
}

ItemImage.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default ItemImage