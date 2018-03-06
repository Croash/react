import React,{ Component } from 'react'
import Wrap from './Wrap'
import Counter from './Counter'
import Content from './Content'
import Header from './Header'
import MBtn from './Btn'
import MBar from './Bar'
import NaviMenu from './NaviMenu'

class Combine extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Wrap { ...this.props }>
        <MBar/>
        <Header/>
        <Counter/>
        <NaviMenu/>
      </Wrap>
    )
  }
}

export default Combine
