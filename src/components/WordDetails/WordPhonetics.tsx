import React from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import { Phonetics } from '../../redux/types/wordTypes'
import PhoneticButton from './PhoneticButton'

interface IWordPhoneticsProps {
  phonetics?: Phonetics[]
}

const WordPhonetics: React.FC<IWordPhoneticsProps> = (props) => {

  const { phonetics } = props

  const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5)
  }))

  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: '20px 0'
      }}
      variant="outlined"
      component="ul"
    >
      {
        phonetics?.map((phoneticItem, index) => {
          return (
            <ListItem key={index}>
              <PhoneticButton
                text={phoneticItem.text?.toLowerCase()}
                audio={phoneticItem.audio}
              />
            </ListItem>
          )
        })
      }
    </Paper>
  )
}

export default WordPhonetics