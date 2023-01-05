import React from 'react'
import { Link } from '@remix-run/react'
import Navegacion from './navegacion'

import logo from '../../public/img/logo.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="contenedor barra">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <Navegacion />
      </div>
    </header>
  )
}

export default Header
