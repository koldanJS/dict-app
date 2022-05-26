import React from 'react'
import { Container } from '@mui/material'
import Nav from './NavBar/Nav'
import Routes from './Routes'
import './App.css'

const App: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Nav />
      <Routes />
    </Container>
  )
}

export default App