import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Search from '../components/Search'
import WordDetails from '../components/WordDetails/WordDetails'
import Loader from '../components/Loader'

const ResultPage: React.FC = () => {

  const appState = useTypedSelector(state => state.appState)

  return (
    <>
      <Search />
      {
        appState.word
          ? <WordDetails word={appState.word} wordDetails={appState.wordDetails} />
          : null
      }
      <Loader loading={appState.loading} />
    </>
  )
}

export default ResultPage