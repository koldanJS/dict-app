import React from 'react'
import './WordTitle.scss'

interface IWordTitleProps {
  word: string
  defaultPhonetic: string
}

const WordTitle: React.FC<IWordTitleProps> = (props) => {

  const { word, defaultPhonetic } = props

  return (
    <div className="word-title">
      <h1 className="word-title-word">
        {word}
      </h1>
      <h1 className="word-title-phonetic">
        {defaultPhonetic}
      </h1>
    </div>
  )
}

export default WordTitle