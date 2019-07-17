import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import defaultReducer from 'molecules/default/reducers'

export default combineReducers({
  defaultReducer,
  routing: routerReducer
})