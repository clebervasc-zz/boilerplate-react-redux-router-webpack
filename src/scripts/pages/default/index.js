// React/Redux core
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// 3rd party
import _ from 'lodash'

// App
import * as actions from 'molecules/default/actions'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { loading: true }
  }

  componentWillMount () {
    this.props.fetch('get')
      .then( () =>
        _.some(this.props.content) && this.setState({ loading: false })
      )
  }

  render() {
    const { content } = this.props
    const { loading } = this.state
    
    return (
      <section>
        {
          loading &&
          <img
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
            alt="Loading"
          />
        }
        {
          _.some(content) &&
          <pre>
            Test of API
            <code>
              <p>{`{\n"completed:, ${content.completed}"`}</p> 
              <p>{`"id:, ${content.id}"`}</p> 
              <p>{`"title:, ${content.title}"`}</p> 
              <p>{`"userId:, ${content.userId}"\n}`}</p> 
            </code>
          </pre>
        }
      </section>
    )
  }
}

App.propTypes = {
  fetch: PropTypes.func,
  content: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

const mapStateToProps = (states) => {
  const { defaultReducer: { content } } = states
  return { content }
}

const mapDispatchToProps = (dispatch) => {
  /* istanbul ignore next */
  return bindActionCreators({...actions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
