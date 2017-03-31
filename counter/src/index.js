import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
//import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import stores from './store/store'
import Counters from './components/Counter'
import * as actions from './actions/action'



var inc = actions['increment'];
var dec = actions['decrement'];
// React component
class Counter extends Component {
  render() {
    return (
      <div>
			<Counters/> 
      </div>
    )
  }
}

Counters.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
	onDecrement: PropTypes.func.isRequired
}

// Action
const increaseAction = { type: 'INCREMENT' }



// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
		onIncrement: () => dispatch(inc()),
		onDecrement: () => dispatch(dec())
  }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counters)

ReactDOM.render(
  <Provider store={stores}>
    <App />
  </Provider>,
  document.getElementById('root')
)
