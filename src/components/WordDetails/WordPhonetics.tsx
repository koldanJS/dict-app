import React from 'react'
import Paper from '@mui/material/Paper'
import { Phonetics } from '../../redux/types/wordTypes'
import PhoneticButton from './PhoneticButton'
import './WordPhonetics.scss'

interface IWordPhoneticsProps {
  phonetics: Phonetics[]
}

const WordPhonetics: React.FC<IWordPhoneticsProps> = (props) => {

  const { phonetics } = props

  return (
    <Paper
      className="word-phonetics"
      variant="outlined"
      component="ul"
    >
      {
        phonetics.map((phoneticItem, index) => {
          return (
            <li key={index}>
              <PhoneticButton
                text={phoneticItem.text}
                audio={phoneticItem.audio}
              />
            </li>
          )
        })
      }
    </Paper>
  )
}

export default WordPhonetics