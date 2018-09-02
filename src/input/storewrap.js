import React,{ Component } from 'react'
import { Provider, connect } from 'react-redux'

const storeWrap = (wrapComponent,store)=>{
  const mapStateToProps = (state) => {
    return {
      value: state.count,
      list: state.list,
      relation: state.relation,
      login: state._login_
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      dataUpdate: (payload) => {
        return dispatch({ type:'blog@@data_update', payload })
      },
      relationUpdate: (payload) => dispatch({ type:'blog@@relation_update', payload }),
      normalUpdate: (payload) => dispatch({ type: 'blog@@normal_update', payload })
    }
  }

  const App = connect(
    mapStateToProps,
    mapDispatchToProps
  )(wrapComponent)

  return class outPut extends Component {
    render() {
      return (
        <Provider store = {store}>
          <App store = {store}/>
        </Provider>
      )
    }
  }
}

export default storeWrap
