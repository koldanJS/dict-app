import { combineReducers } from 'redux'
import { wordReducer } from './wordReducer'

export const rootReducer = combineReducers({
  appState: wordReducer
})

export type RootState = ReturnType<typeof rootReducer>