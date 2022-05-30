import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Search from '../components/Search'
import Logo from '../components/Logo'
import Loader from '../components/Loader'

const HomePage: React.FC = () => {

  const wordState = useTypedSelector(state => state.wordState)

  return (
    <>
      <Logo theme={wordState.theme} />
      <Search />
      <Loader loading={wordState.loading} />
    </>
  )
}

export default HomePage