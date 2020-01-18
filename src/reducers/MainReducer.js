import { combineReducers } from 'redux'
import movies from './MovieReducer'
import visibilityFilter from './FilterReducer'

export default combineReducers({
  movies,
  visibilityFilter
})