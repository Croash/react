import React,{ Component, Children } from 'react'

class Base extends Component {

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

export default Base
