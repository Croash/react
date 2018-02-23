import React, { Component, PropTypes } from 'react'
import { Provider, connect } from 'react-redux'
import store from './store'
import Comp from './components'

const { Base, Counter, Combine } = Comp

function mapStateToProps(state) {
  return {
    value: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => { 
      return dispatch({ type:'INCREMENT' }) 
    },
    onDecrement: () => dispatch({ type:'DECREMENT' })
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Combine)

class outPut extends Component {
  render() {
    return (
      <Provider store= {store}>
        <App/>
      </Provider>
    )
  }
}

export default outPut
