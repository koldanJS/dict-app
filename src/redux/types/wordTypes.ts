export interface Word {
  word: string
  phonetic?: string
  phonetics?: [
    {
      audio?: string
      sourceUrl?: string
    }
  ],
  meanings?: [
    {
      partOfSpeech: string
      definitions: [
        {
          definition: string
          synonyms: string[]
          antonyms: string[]
          example: string
        }
      ]
      synonyms: string[]
      antonyms: string[]
    }
  ],
  license?: {
    name: string
    url: string
  },
  sourceUrls?: string[]
}

export interface WordState {
  word: Word[]
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
  payload: Word[]
}

export type WordAction =
  FetchWordAction
  | FetchWordErrorAction
  | FetchWordSuccessAction