export interface License {
  name?: string
  url?: string
}

export interface Phonetics {
  text?: string
  audio?: string
  sourceUrl?: string
  license?: License
}

export interface Definitions {
  definition?: string
  synonyms?: string[]
  antonyms?: string[]
  example?: string
}

export interface Meanings {
  partOfSpeech?: string
  definitions?: Definitions[]
  synonyms?: string[]
  antonyms?: string[]
}

export interface WordDetails {
  word: string
  phonetic?: string
  phonetics?: Phonetics[],
  meanings?: Meanings[],
  license?: License,
  sourceUrls?: string[]
}

export interface ErrorState {
  message: string
  resolution: string
  title: string
  status: number
}

export interface AppState {
  wordDetails: WordDetails[]
  word: string
  loading: boolean
  error: null | ErrorState
  theme: string
}

export enum WordActionTypes {
  FETCH_WORD = 'FETCH_WORD',
  FETCH_WORD_ERROR = 'FETCH_WORD_ERROR',
  FETCH_WORD_SUCCESS = 'FETCH_WORD_SUCCESS',
  TOGGLE_THEME = 'TOGGLE_THEME'
}

interface FetchWordAction {
  type: WordActionTypes.FETCH_WORD
}
interface FetchWordErrorAction {
  type: WordActionTypes.FETCH_WORD_ERROR
  payload: ErrorState
}
interface FetchWordSuccessAction {
  type: WordActionTypes.FETCH_WORD_SUCCESS
  payload: WordDetails[]
}
interface ToggleTheme {
  type: WordActionTypes.TOGGLE_THEME
}

export type WordAction =
  FetchWordAction
  | FetchWordErrorAction
  | FetchWordSuccessAction
  | ToggleTheme