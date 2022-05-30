import React, { useState } from 'react'
import { Container, Pagination } from '@mui/material'
import { WordDetails } from '../../redux/types/wordTypes'
import WordPhonetics from './WordPhonetics'
import WordTitle from './WordTitle'
import WordMeanings from './WordMeanings'

interface IWordDetailsProps {
  word: string
  wordDetails: WordDetails[]
}

const WordDetailsComponent: React.FC<IWordDetailsProps> = (props) => {

  const { word, wordDetails } = props
  const [page, setPage] = useState(1)

  const defaultPhonetic = wordDetails[page - 1].phonetic || ''
  
  const transformPhoneticString = (phonetic: string) => {
    if (!phonetic) return ''
    return ' ' + phonetic
      .replace('/', '[')
      .replace('/', ']')
  }

  const changeHandler = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <WordTitle
        word={word}
        defaultPhonetic={transformPhoneticString(defaultPhonetic)}
      />
      {
        wordDetails[page - 1].phonetics?.length
          ? <WordPhonetics
            phonetics={wordDetails[page - 1].phonetics}
          />
          : null
      }
      <WordMeanings
        meanings={wordDetails[page - 1].meanings}
      />
      <Pagination
        sx={{mt: 2}}
        count={wordDetails.length}
        page={page}
        onChange={changeHandler}
        shape="rounded"
        color="primary"
        size="small"
      />
    </Container>
  )
}

export default WordDetailsComponent