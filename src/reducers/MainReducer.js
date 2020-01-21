import { combineReducers } from 'redux'
import movies from './MovieReducer'
import selectedred from './selectedred.js'
import visibilityFilter from './FilterReducer'

export default combineReducers({
  movies,
  visibilityFilter,
  selectedred
})