// React/Redux core
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import configureStore from 'organisms/Store'

// App
import App from 'pages/default'

const Store = configureStore()

const Routes = () => (
  <Provider store={Store}>
    <Router>
      <Switch>
          <Route path="/" exact component={App} />
      </Switch>
    </Router>
  </Provider>
)

export default Routes