import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import RightBtn from './RightBtn'
import Drawer from './Drawer'

const headerStyle = { position:'fixed', top: '0' }

class MuiBar extends Component {

  render() {
    return (
      <AppBar 
        label="Default"     
        title="Zelin_Shao Blog"
        iconElementRight={ <RightBtn/> }
        style = {headerStyle}
        iconElementLeft={ <Drawer {...this.props} /> }
      />)
  }
}

export default MuiBar
