import React,{ Component, Children } from 'react'
import Counter from './Counter'

class Base extends Component {

  constructor(props) {
    super(props)
  }

  renderChildren() {
    const childrenWithProps = Children.map(this.props.children,
      (child) => React.cloneElement(child, { ...this.props }))
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
