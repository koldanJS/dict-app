import React from 'react'
import { Paper } from '@mui/material'
import { Meanings } from '../../redux/types/wordTypes'
import MeaningItem from './MeaningItem'
import './WordMeanings.scss'

interface IWordMeaningsProps {
  meanings: Meanings[]
}

const WordMeanings: React.FC<IWordMeaningsProps> = (props) => {

  const { meanings } = props

  return (
    <Paper
      className="word-meanings"
      variant="outlined"
      component="ul"
    >
      <h3>
        Part of speech
      </h3>
      {meanings?.map(meaningItem => {
        return (
          <li key={Math.random()} >
            <MeaningItem
              {...meaningItem}
            />
          </li>
        )
      })}
    </Paper>
  )
}

export default WordMeanings