import React from 'react'
import { images } from '../img/images'
import './Logo.scss'

interface ILogoProps {
  theme: string
}

const Logo: React.FC<ILogoProps> = (props) => {

  const { theme } = props

  return (
    <div className="app-logo-container" >
      <img
        src={(theme === 'Light') ? images.blackLogo : images.whiteLogo}
        alt="logo"
      />
    </div>
  )
}

export default Logo