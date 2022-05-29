import { WordAction, WordActionTypes, WordState } from '../types/wordTypes'

const initialState: WordState = {
  wordDetails: [],
  word: '',
  loading: false,
  error: null,
  theme: 'Light'
}

export const wordReducer = (state = initialState, action: WordAction): WordState => {
  switch (action.type) {
  case WordActionTypes.FETCH_WORD: return {
    ...state,
    wordDetails: [],
    word: '',
    loading: true,
    error: null
  }
  case WordActionTypes.FETCH_WORD_ERROR: return {
    ...state,
    loading: false,
    error: action.payload
  }
  case WordActionTypes.FETCH_WORD_SUCCESS: return {
    ...state,
    wordDetails: action.payload,
    word: action.payload[0].word,
    loading: false
  }
  case WordActionTypes.TOGGLE_THEME: return {
    ...state,
    theme: (state.theme === 'Light') ? 'Dark' : 'Light'
  }
  default: return state
  }
}