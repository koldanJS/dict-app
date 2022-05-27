import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Search from '../components/Search'

const ResultPage: React.FC = () => {

  const word = useTypedSelector(state => state.word)

  return (
    <>
      <Search />
      {
        word.word.length
          ? <h1>{word.word[0].word}</h1>
          : null
      }
      
      {
        word.loading
          ? <h1>Loading...</h1>
          : null
      }
    </>
  )
}

export default ResultPage