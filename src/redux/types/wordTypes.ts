export interface WordState {
  word: any[]
  loading: boolean
  error: null | string
}

export enum WordActionTypes {
  FETCH_WORD = 'FETCH_WORD',
  FETCH_WORD_ERROR = 'FETCH_WORD_ERROR',
  FETCH_WORD_SUCCESS = 'FETCH_WORD_SUCCESS'
}

interface FetchWordAction {
  type: WordActionTypes.FETCH_WORD
}
interface FetchWordErrorAction {
  type: WordActionTypes.FETCH_WORD_ERROR
  payload: string
}
interface FetchWordSuccessAction {
  type: WordActionTypes.FETCH_WORD_SUCCESS
  payload: any[]
}

export type WordAction =
  FetchWordAction
  | FetchWordErrorAction
  | FetchWordSuccessAction