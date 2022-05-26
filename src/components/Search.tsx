import React, { useState } from 'react'
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
    if (event.code === 'Enter') getWord()
  }

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setWord(event.target.value.trim())
  }

  return (
    <>
      <input
        type="text"
        value={word}
        placeholder="Enter a word..."
        onKeyDown={keyDownHandler}
        onChange={changeHandler}
      />
      <button onClick={getWord} >getHello</button>
      {
        isAlert
          ? <Alert />
          : null
      }
    </>
  )
}

export default Search