import React from 'react'
import { GTranslate as GTranslateIcon } from '@mui/icons-material'
import './AppLogo.scss'

const AppLogo: React.FC = () => {

  return (
    <>
      <GTranslateIcon className="logo-icon" />
      <h1 className="logo-lable">
        DICT
      </h1>
    </>
  )
}

export default AppLogo