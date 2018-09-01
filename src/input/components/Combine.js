import React,{ Component, Children } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import SideBar from './SideBar'

import Auth from './Auth'

class Combine extends Component {
  
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Wrap { ...this.props } >
        <Header/>
        <Auth/>
        <Content/>
        <Footer/>
        <SideBar/>
      </Wrap>
    )
  }
}

class Wrap extends Component {

  constructor(props) {
    super(props)
  }

  renderChildren() {
    const childrenWithProps = Children.map(this.props.children,
      (child) => child!=null ? React.cloneElement(child, { ...this.props }) : null ) 
    return childrenWithProps
  }

  render() {
    return (
      <div>
        { this.renderChildren() }
      </div>
    )
  }
}

export default Combine
