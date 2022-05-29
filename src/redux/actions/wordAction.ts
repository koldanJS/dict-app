import { Dispatch } from 'react'
import { WordAction, WordActionTypes } from '../types/wordTypes'

export const toggleTheme = () => ({
  type: WordActionTypes.TOGGLE_THEME
})

export const fetchWord = (word: string) => {
  return async (dispatch: Dispatch<WordAction>) => {
    try {
      dispatch({type: WordActionTypes.FETCH_WORD})
      const uri = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      const response = await fetch(uri)
      const data = await response.json()
      if (!response.ok) {
        dispatch({
          type: WordActionTypes.FETCH_WORD_ERROR,
          payload: {
            message: data.message,
            resolution: data.resolution,
            title: data.title,
            status: response.status
          }
        })
        throw new Error('processed error with dispatch')
      }
      dispatch({
        type: WordActionTypes.FETCH_WORD_SUCCESS,
        payload: data
      })
    } catch(e) {
      if (!String(e).includes('processed error with dispatch')) {
        dispatch({
          type: WordActionTypes.FETCH_WORD_ERROR,
          payload: {
            message: 'Oops, something went wrong, please try again...',
            resolution: '',
            title: '',
            status: 0
          }
        })
      }
      throw new Error('vavigate to "/not-found"')
    }
  }
}