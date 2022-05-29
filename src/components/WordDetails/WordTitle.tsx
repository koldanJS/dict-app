import React from 'react'
import { Typography } from '@mui/material'

interface IWordTitleProps {
  word: string
  defaultPhonetic: string
}

const WordTitle: React.FC<IWordTitleProps> = (props) => {

  const { word, defaultPhonetic } = props

  return (
    <div>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          display: 'inline-block',
          fontWeight: 700,
          color: 'inherit',
          mt: 2,
          mr: 2
        }}
      >
        {word}
      </Typography>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          display: 'inline-block',
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