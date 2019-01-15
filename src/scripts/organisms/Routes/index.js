// React/Redux core
import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import configureStore from 'organisms/Store'

const store = configureStore()


// App
import App from 'pages/default'

const Routes = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
      </Switch>
    </Router>
  </Provider>
)

export default Routes