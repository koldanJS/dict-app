import React, { useState } from 'react'
import { useActions } from '../hooks/useActions'

interface ISearchProps {
  getWord: (word: string) => void
}

const Search: React.FC<ISearchProps> = (props) => {

  const { getWord } = props
  const [word, setWord] = useState('')

  const { fetchWord } = useActions()

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setWord(event.target.value)
  }

  return (
    <>
      <input
        type="text"
        value={word}
        placeholder="Enter a word..."
        onChange={changeHandler}
      />
      <button onClick={() => fetchWord(word)} >getHello</button>
    </>
  )
}

export default Search