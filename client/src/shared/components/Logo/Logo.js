
import React from 'react'
import LogoImg from '../../assets/icons/Logo_ML@2x.png'

const Logo = () => {
  return (
    <div
      className="m-3"
    >
      <img src={LogoImg} alt="Main Logo" style={{ maxWidth: 60 }} />
    </div>
  )
}

export default Logo