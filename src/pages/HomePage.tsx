import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Search from '../components/Search'
import Logo from '../components/Logo'

const HomePage: React.FC = () => {

  const word = useTypedSelector(state => state.word)

  return <div>
    <Logo />
    <Search />
    {
      word.word[0]
        ? <pre>{JSON.stringify(word.word, null, 2)}</pre>
        : null
    }
  </div>
}

export default HomePage