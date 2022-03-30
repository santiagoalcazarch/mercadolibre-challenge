
import React from 'react'
import PropTypes from 'prop-types';

/* Muestra una image
 * Se realizó un componente aparte por la posible inclusión de 
 * alguna funcionalidad sobre la imagen en un futuro
 */
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