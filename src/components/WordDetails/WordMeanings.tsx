import React from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import { Meanings } from '../../redux/types/wordTypes'
import MeaningItem from './MeaningItem'

interface IWordPhoneticsProps {
  meanings?: Meanings[]
}

const WordMeanings: React.FC<IWordPhoneticsProps> = (props) => {

  const { meanings } = props

  const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5)
  }))

  return (
    <Paper
      sx={{
        listStyle: 'none',
        p: 1,
        m: 0
      }}
      variant="outlined"
      component="ul"
    >
      {meanings?.map((meaningItem, index) => {
        return (
          <ListItem key={index} >
            <MeaningItem
              {...meaningItem}
            />
          </ListItem>
        )
      })}
    </Paper>
  )
}

export default WordMeanings