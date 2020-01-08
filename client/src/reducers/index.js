import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from './authReducer'
import userReducer from '../redux/user/user.reducers';
import tagReducers from '../redux/tag/tag.reducers'
import majorReducers from '../redux/major/major.reducers'
import statisticsReducers from '../redux/statistic/statistic.reducers'

// const userPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: [
//     'user', // save only user to storage
//   ],
// }

const rootReducer = combineReducers({
  // auth: persistReducer(userPersistConfig, authReducer),
  user: userReducer,
  auth: authReducer,
  tag: tagReducers,
  major: majorReducers,
  statistic: statisticsReducers
})

export default rootReducer
