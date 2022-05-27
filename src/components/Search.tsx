import { Container } from '@mui/material'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import { useActions } from '../hooks/useActions'
import Alert from './Alert'

const Search: React.FC = () => {

  const [word, setWord] = useState('')
  const [isAlert, setIsAlert] = useState(false)
  const { fetchWord } = useActions()

  const getWord = () => {
    if (!word) {
      setTimeout(() => {
        setIsAlert(false)
      }, 2000)
      return setIsAlert(true)
    }
    fetchWord(word)
  }

  const keyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') getWord()
  }

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setWord(event.target.value.trim())
  }

  return (
    <Container>
      <TextField
        fullWidth
        autoFocus={true}
        type="text"
        label="Enter a word and press 'Enter' to see more..."
        variant="filled"
        value={word}
        placeholder="Enter a word..."
        onKeyDown={keyDownHandler}
        onChange={changeHandler}
      />
      {
        isAlert
          ? <Alert message="Looks like you didn\'t enter anything..." />
          : null
      }
    </Container>
  )
}

export default Search