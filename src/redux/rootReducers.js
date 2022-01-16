import { combineReducers } from 'redux'
import usersReducer from './reducers/usersReducer'

const rootreducers = combineReducers({
  user: usersReducer,
})

export default rootreducers
