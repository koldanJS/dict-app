import React from 'react'
import { Container, Skeleton } from '@mui/material'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Search from '../components/Search'
import WordDetails from '../components/WordDetails/WordDetails'

const ResultPage: React.FC = () => {

  const wordState = useTypedSelector(state => state.wordState)

  return (
    <>
      <Search />
      {
        wordState.word
          ? <WordDetails word={wordState.word} wordDetails={wordState.wordDetails} />
          : null
      }
      {
        wordState.loading
          ? <Container>
            <Skeleton width="100%" height="40vw" />
          </Container>
          : null
      }
    </>
  )
}

export default ResultPage