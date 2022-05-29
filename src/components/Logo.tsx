import React from 'react'
import { images } from '../img/images'
import './Logo.css'

interface ILogoProps {
  theme: string
}

const Logo: React.FC<ILogoProps> = (props) => {

  const { theme } = props

  return (
    <div className="app-logo container" >
      <img
        className="app-logo"
        src={(theme === 'Light') ? images.blackLogo : images.whiteLogo}
        alt="logo"
      />
    </div>
  )
}

export default Logo