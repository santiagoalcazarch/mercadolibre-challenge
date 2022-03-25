

import React from 'react'
import PropTypes from 'prop-types'

const BlueButton = ({ child }) => {
  return (
    <div>
      <button
        className="btn blue-button"
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