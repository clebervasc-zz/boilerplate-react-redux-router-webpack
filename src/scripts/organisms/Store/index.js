import { createStore, applyMiddleware } from 'redux'
import { Reducers } from './reducers'
import thunk from 'redux-thunk'

export default function configureStore() {  
  return createStore(
  Reducers,
    applyMiddleware(thunk)
  )
}