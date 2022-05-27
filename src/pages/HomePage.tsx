import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Search from '../components/Search'
import Logo from '../components/Logo'

const HomePage: React.FC = () => {

  const word = useTypedSelector(state => state.word)

  return (
    <>
      <Logo />
      <Search />
      {
        word.loading
          ? <h1>Loading...</h1>
          : null
      }
    </>
  )
}

export default HomePage