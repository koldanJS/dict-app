import React, { useState } from 'react'
import { GTranslate as GTranslateIcon } from '@mui/icons-material'
import { Typography } from '@mui/material'

const AppLogo: React.FC = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth)
  })

  return (
    <>
      <GTranslateIcon
        sx={{
          display: (windowWidth > 900)
            ? { xs: 'none', md: 'flex' }
            : { xs: 'flex', md: 'none' },
          mr: 1
        }}
      />
      <Typography
        variant={(windowWidth > 600) ? 'h5' : 'h6'}
        component="div"
        sx={{
          display: (windowWidth > 900)
            ? { xs: 'none', md: 'flex' }
            : { xs: 'flex', md: 'none' },
          flexGrow: (windowWidth > 900) ? 0 : 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          color: 'inherit',
          letterSpacing: '.3rem'
        }}
      >
        DICT
      </Typography>
    </>
  )
}

export default AppLogo