import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import RightBtn from './RightBtn'
import Drawer from './Drawer'
import NaviMenu from './NaviMenu'

class MuiBar extends Component {

  render() {
    console.log(this.props)
    return (
      <AppBar 
        label="Default"     
        title="Zelin_Shao Blog"
        iconElementRight={ <RightBtn/> }
        style = {{}}
        iconElementLeft={ <Drawer {...this.props} inputEle = { <NaviMenu/> } /> }
      />)
  }
}

export default MuiBar
