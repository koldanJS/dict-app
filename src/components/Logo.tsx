import React from 'react'
import { images } from '../img/images'

const Logo: React.FC = () => {
  return (
    <div className="app-logo-container" >
      <img className="app-logo" src={images.logo} alt="logo" />
    </div>
  )
}

export default Logo