import React from 'react'
import { Container, Box } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useTypedSelector } from '../hooks/useTypedSelector'
import NavBar from './NavBar/NavBar'
import Routes from './Routes'
import './App.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const ligthTheme = createTheme({
  palette: {
    mode: 'light'
  }
})

const App: React.FC = () => {

  const theme = useTypedSelector(state => state.appState.theme)

  return (
    <ThemeProvider theme={(theme === 'Light') ? ligthTheme : darkTheme}>
      <Box
        className="padding-box"
        sx={{
          position: 'absolute',
          top: 0,
          boxSizing: 'border-box',
          minHeight: '100vh',
          width: '100vw',
          bgcolor: 'background.default',
          color: 'text.primary'
        }}
      >
        <Container maxWidth="xl">
          <NavBar />
          <Routes />
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App