import React from 'react'
import { Typography } from '@mui/material'

interface IWordTitleProps {
  word: string
  defaultPhonetic: string
}

const WordTitle: React.FC<IWordTitleProps> = (props) => {

  const { word, defaultPhonetic } = props

  return (
    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}} >
      <Typography
        variant="h2"
        component="h2"
        align="center"
        sx={{
          fontWeight: 700,
          color: 'inherit',
          mr: 2
        }}
      >
        {word}
      </Typography>
      <Typography
        variant="h2"
        component="h2"
        align="center"
        sx={{
          whiteSpace: 'nowrap',
          color: 'inherit'
        }}
      >
        {defaultPhonetic}
      </Typography>
    </div>
  )
}

export default WordTitle