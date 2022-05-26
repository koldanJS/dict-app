import { Dispatch } from 'react'
import { WordAction, WordActionTypes } from '../types/wordTypes'

export const fetchWord = (word: string) => {
  return async (dispatch: Dispatch<WordAction>) => {
    try {
      dispatch({type: WordActionTypes.FETCH_WORD})
      const uri = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      const response = await fetch(uri)
      const data = await response.json()
      dispatch({
        type: WordActionTypes.FETCH_WORD_SUCCESS,
        payload: data
      })
    } catch(e) {
      dispatch({
        type: WordActionTypes.FETCH_WORD_ERROR,
        payload: 'An error occurred while loading the word'
      })
    }
  }
}