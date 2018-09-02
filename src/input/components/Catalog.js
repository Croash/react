import React,{ Component, Children } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import Catalog from './cataBase'
import SideBar from './SideBar'
import Wrap from './Wrap'

import Auth from './Auth'

class Combine extends Component {
  
  static contextTypes = {
    store: PropTypes.object,
    router: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
  }
  render() {
    const { login } = this.props
    return (
      <Wrap { ...this.props } >
        <Header/>
        <Catalog/>
        <Footer/>
        <SideBar/>
      </Wrap>
    )
  }
}

export default Combine
