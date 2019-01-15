// React/Redux Core
import { applyMiddleware, createStore, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import Reducers from './reducers'

const configureStore = () => {
  const middleware = applyMiddleware(
    thunk,
    createLogger()
  )

  const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )

  const store = createStore(
    Reducers,
    compose(middleware, enhancers)
  )

  if (module.hot) {
    const reducers = './reducers'

    module.hot.accept(reducers, () => {
      const nextReducers = require(reducers).default
      store.replaceReducer(nextReducers)
    })
  }

  return store
}

export default configureStore