import { WordAction, WordActionTypes, WordDetailsState } from '../types/wordTypes'

const initialState: WordDetailsState = {
  wordDetails: [],
  word: '',
  loading: false,
  error: null
}

export const wordReducer = (state = initialState, action: WordAction): WordDetailsState => {
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
  default: return state
  }
}