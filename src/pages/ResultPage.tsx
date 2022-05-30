import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Search from '../components/Search'
import WordDetails from '../components/WordDetails/WordDetails'
import Loader from '../components/Loader'

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
      <Loader loading={wordState.loading} />
    </>
  )
}

export default ResultPage