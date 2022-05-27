import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Search from '../components/Search'

const ResultPage: React.FC = () => {

  const wordState = useTypedSelector(state => state.wordState)

  return (
    <>
      <Search />
      {
        wordState.word
          ? <h1>{wordState.word}</h1>
          : null
      }
      
      {
        wordState.loading
          ? <h1>Loading...</h1>
          : null
      }
    </>
  )
}

export default ResultPage