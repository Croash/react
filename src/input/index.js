import React, { Component, PropTypes } from 'react'
import { Provider, connect } from 'react-redux'
import store from './store'
import Comp from './components'

const { Base, Counter, Combine } = Comp

function mapStateToProps(state) {
  return {
    value: state.count,
    list: state.list,
    relation: state.relation
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dataUpdate: (payload) => {
      return dispatch({ type:'blog@@data_update', payload:payload })
    },
    relationUpdate: (payload) => dispatch({ type:'blog@@relation_update', payload:payload })
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Combine)

class outPut extends Component {
  render() {
    return (
      <Provider store = {store}>
        <App store = {store}/>
      </Provider>
    )
  }
}

export default outPut
