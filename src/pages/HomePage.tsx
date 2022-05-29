import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Search from '../components/Search'
import Logo from '../components/Logo'

const HomePage: React.FC = () => {

  const wordState = useTypedSelector(state => state.wordState)

  return (
    <>
      <Logo theme={wordState.theme} />
      <Search />
      {
        wordState.loading
          ? <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 3
            }}
          >
            <CircularProgress />
          </Box>
          : null
      }
    </>
  )
}

export default HomePage