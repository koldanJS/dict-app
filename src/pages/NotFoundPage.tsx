import { Container } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ErrorComponent from '../components/Error'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { images } from '../img/images'

const NotFoundPage: React.FC = () => {

  const error = useTypedSelector(state => state.wordState.error)
  const navigate = useNavigate()

  const clickHandler = () => {
    navigate('/')
  }

  return (
    <Container>
      <ErrorComponent
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