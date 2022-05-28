import React from 'react'
import { Typography } from '@mui/material'

interface IWordTitleProps {
  word: string
  defaultPhonetic: string
}

const WordTitle: React.FC<IWordTitleProps> = (props) => {

  const { word, defaultPhonetic } = props

  return (
    <div style={{display: 'flex', justifyContent: 'center'}} >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontFamily: 'monospace',
          fontWeight: 700,
          color: 'inherit',
          letterSpacing: '.3rem'
        }}
      >
        {word}
      </Typography>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          whiteSpace: 'nowrap',
          fontFamily: 'monospace',
          color: 'inherit'
        }}
      >
        {defaultPhonetic}
      </Typography>
    </div>
  )
}

export default WordTitle