import React,{ Component } from 'react'
import Base from './Base'
import Counter from './Counter'
import Header from './Header'
import MBtn from './Btn'
import MBar from './Bar'
import Test from './testComp'

class Combine extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Base { ...this.props }>
        <MBar/>
        <Header/>
        <Counter/>
        <MBtn/>
        <Test/>

      </Base>
    )
  }
}

export default Combine
