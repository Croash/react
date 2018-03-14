import React,{ Component, Children } from 'react'

import Header from './Bar'
import Footer from './Footer'
import MBar from './Bar'
import Writer from './Writer'

class Combine extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props)
    return (
      <Wrap { ...this.props }>
        <Header/>
        <Writer/>
        <Footer/>
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
