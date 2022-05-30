import React, { Dispatch, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Container, TextField } from '@mui/material'
import { WordAction } from '../redux/types/wordTypes'
import { fetchWord } from '../redux/actions/wordAction'
import './Search.scss'

const Search: React.FC = () => {

  const [word, setWord] = useState('')
  const [isAlert, setIsAlert] = useState(false)
  const [disabled, setdisabled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const dispatch: Dispatch<WordAction> = useDispatch()
  const path = location.pathname

  const getWord = async (word: string) => {
    if (!word) {
      setTimeout(() => {
        setIsAlert(false)
      }, 2000)
      return setIsAlert(true)
    }
    try {
      setdisabled(true)
      await fetchWord(word)(dispatch)
      navigate(`/result/${word}`)
    } catch(e) {
      navigate('/not-found')
    } finally {
      setdisabled(false)
      setWord('')
    }
  }

  const keyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      getWord(word)
    }
  }

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setWord(event.target.value.trim())
  }

  useEffect(() => {
    if (path.includes('/result/') && path.replace('/result/', '')) {
      getWord(path.replace('/result/', ''))
    }
  }, [path])

  return (
    <Container>
      <TextField
        className="search-field"
        error={isAlert}
        disabled={disabled}
        fullWidth
        autoFocus={true}
        type="text"
        value={word}
        placeholder="Enter a word..."
        label={isAlert ? 'Alert' : 'Enter a word and press "Enter" to see more...'}
        helperText={isAlert ? 'Looks like you didn\'t enter anything...' : ''}
        variant="filled"
        onKeyDown={keyDownHandler}
        onChange={changeHandler}
      />
    </Container>
  )
}

export default Search