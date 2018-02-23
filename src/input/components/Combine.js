import React,{ Component } from 'react'
import Base from './Base'
import Counter from './Counter'
import Header from './Header'

class Combine extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Base { ...this.props }>
        <Header/>
        <Counter/>
      </Base>
    )
  }
}

export default Combine
