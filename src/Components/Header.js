import React from 'react'
import Logo from '../images/Logo.png'

const Header = () => {

  return (
    <div className='header'>
      <img className='logo' src={Logo} />
    </div>
  )
}

export default Header