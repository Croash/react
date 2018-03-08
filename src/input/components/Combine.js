import React,{ Component } from 'react'
import Wrap from './Wrap'

import Header from './Bar'
import Footer from './Footer'
import MBar from './Bar'
import Writer from './Writer'

class Combine extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Wrap { ...this.props }>
        <Header/>
        <Writer/>
        <Footer/>
      </Wrap>
    )
  }
}

export default Combine
