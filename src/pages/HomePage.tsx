import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
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