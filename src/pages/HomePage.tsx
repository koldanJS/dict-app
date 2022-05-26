import React from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const HomePage: React.FC = () => {

  const { fetchWord } = useActions()
  const word = useTypedSelector(state => state.word)

  return <div>
    HomePage
    {
      word.word[0]
        ? <pre>{JSON.stringify(word.word, null, 2)}</pre>
        : <button onClick={() => fetchWord('I')} >getHello</button>
    }
  </div>
}

export default HomePage