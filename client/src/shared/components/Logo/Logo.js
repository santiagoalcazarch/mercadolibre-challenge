
import React from 'react'
import { Link } from 'react-router-dom'
import { HOME } from '../../../routes/routes'
import LogoImg from '../../assets/icons/Logo_ML@2x.png'

const Logo = () => {
  return (
    <div
      className="m-3"
    >
      <Link
        to={HOME}
      >
        <img src={LogoImg} alt="Main Logo" style={{ maxWidth: 60 }} />
      </Link>
    </div>
  )
}

export default Logo