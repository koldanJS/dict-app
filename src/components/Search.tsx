import React, { useState } from 'react'
import { useActions } from '../hooks/useActions'

const Search: React.FC = () => {

  const [word, setWord] = useState('')

  const { fetchWord } = useActions()

  const getWord = () => {
    if (!word) {
      return alert('Looks like you didn\'t enter anything...')
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
    </>
  )
}

export default Search