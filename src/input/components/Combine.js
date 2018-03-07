import React,{ Component } from 'react'
import Wrap from './Wrap'

import Header from './Bar'
import Counter from './Counter'
import Footer from './Footer'
import MBar from './Bar'
import NaviMenu from './NaviMenu'
import Writer from './Writer'

class Combine extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Wrap { ...this.props }>
        <Header/>
        <Counter/>
        <NaviMenu/>
        <Writer/>
        <Footer/>
      </Wrap>
    )
  }
}

export default Combine
