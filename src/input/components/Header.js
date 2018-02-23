import React,{ Component } from 'react'

const HeaderStyle = {
  color: 'black',
  fontSize: 34,
  textAlign: 'center'
}

class Header extends Component {
  render() {
    const content = '默认设置'
    return (
      <div style={ HeaderStyle }>
        { content }
      </div>
    )
  }
}

export default Header
