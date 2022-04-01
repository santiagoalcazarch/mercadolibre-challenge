import React from 'react'
import PropTypes from 'prop-types'

/**
 * Renderiza un contenedor para mostrar al usuario 
 * diferentes mensajes
 */
const MessageBox = ({title, description}) => {
  return (
    <div className="message-box message p-5 animate__animated animate__fadeIn">
      <div> <h1> { title } </h1> </div>
      <p> { description } </p>
    </div>
  )
}
MessageBox.propTypes = {
  title: PropTypes.any,
  description: PropTypes.any
}

export default MessageBox



