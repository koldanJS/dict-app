import { WordAction, WordActionTypes, WordState } from '../types/wordTypes'

const initialState: WordState = {
  word: [],
  loading: false,
  error: null
}

export const wordReducer = (state = initialState, action: WordAction): WordState => {
  switch (action.type) {
  case WordActionTypes.FETCH_WORD: return {
    ...state,
    loading: true
  }
  case WordActionTypes.FETCH_WORD_ERROR: return {
    ...state,
    loading: false,
    error: action.payload
  }
  case WordActionTypes.FETCH_WORD_SUCCESS: return {
    ...state,
    loading: false,
    word: action.payload
  }
  default: return state
  }
}