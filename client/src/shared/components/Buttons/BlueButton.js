

import React from 'react'
import PropTypes from 'prop-types'

/**
 * Botón con fondo azul multiproposito
 */
const BlueButton = ({ child, onClick }) => {
  return (
    <div>
      <button
        className="btn blue-button"
        onClick={onClick}
      >
        { child }
      </button>
    </div>
    
  )
}

BlueButton.propTypes = {
  child: PropTypes.any.isRequired
}

export default BlueButton