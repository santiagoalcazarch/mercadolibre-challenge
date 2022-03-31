
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HOME } from '../../../routes/routes'
import BlueButton from '../../../shared/components/Buttons/BlueButton'
import MessageBox from '../../../shared/components/Message-box/Message_box'

/** Debería renderizarse cada que el usuario se encuentre 
 * en una ruta no permitida o inexistente
 */
const UnknownRoute = () => {

  const navigate = useNavigate();

  return (
    <div>
      <MessageBox 
        title="¡Ups!"
        description="La ruta que estas buscando no existe"
      />
      
      <div className="w-50 mx-auto mt-4"> 
        <BlueButton 
          child="Ir a casa"
          onClick={ () => navigate(HOME) }
        />
      </div>
    </div>
  )
}

export default UnknownRoute