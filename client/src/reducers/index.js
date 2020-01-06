import { combineReducers } from 'redux'
import authReducer from './authReducer'
import tagReducers from '../redux/tag/tag.reducers'
import majorReducers from '../redux/major/major.reducers'

const rootReducer = combineReducers({
  auth: authReducer,
  tag: tagReducers,
  major: majorReducers,
})

export default rootReducer
