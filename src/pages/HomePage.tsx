import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Search from '../components/Search'
import Logo from '../components/Logo'
import Loader from '../components/Loader'

const HomePage: React.FC = () => {

  const appState = useTypedSelector(state => state.appState)

  return (
    <>
      <Logo theme={appState.theme} />
      <Search />
      <Loader loading={appState.loading} />
    </>
  )
}

export default HomePage