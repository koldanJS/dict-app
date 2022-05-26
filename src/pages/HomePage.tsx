import React from 'react'
import Search from '../components/Search'
import { useTypedSelector } from '../hooks/useTypedSelector'

const HomePage: React.FC = () => {

  const word = useTypedSelector(state => state.word)

  return <div>
    HomePage
    <Search getWord={(word) => {}} />
    {
      word.word[0]
        ? <pre>{JSON.stringify(word.word, null, 2)}</pre>
        : null
    }
  </div>
}

export default HomePage