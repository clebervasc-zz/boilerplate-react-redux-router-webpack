// React/Redux core
import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from 'organisms/Store'

// App
import App from 'pages/default'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

const Routes = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route component={App} path='/' />
    </Router>
  </Provider>
)

export default Routes