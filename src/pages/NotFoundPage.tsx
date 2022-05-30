import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from '@mui/material'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { images } from '../img/images'
import NotFound from '../components/NotFound'

const NotFoundPage: React.FC = () => {

  const error = useTypedSelector(state => state.appState.error)
  const navigate = useNavigate()

  const clickHandler = () => {
    navigate('/')
  }

  return (
    <Container>
      <NotFound
        label="Oops!"
        title={'Looks like we didn\'t find your word...'}
        status={`Error code: ${error?.status || 'unknown'}`}
        returnTo="Back to home page"
        clickHandler={clickHandler}
        notFound={images.notFound}
      />
    </Container>
  )
}

export default NotFoundPage