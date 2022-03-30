import React from 'react'
import MessageBox from '../../../shared/components/Message-box/Message_box'

/**
 * Muestra la bienvenida a la aplicación
 */
const Welcome = () => {
  return (
    <MessageBox 
      title="Bienvenido :)"
      description="¡Realiza tu primer busqueda!"
    />
  )
}

Welcome.propTypes = {}

export default Welcome