import React,{ Component } from 'react'
import AppBar from 'material-ui/AppBar'
import RightBtn from './RightBtn'
import Drawer from './Drawer'
import NaviMenu from './NaviMenu'

class MuiBar extends Component {
  render() {
    return (
    <AppBar 
      label="Default"     
      title="Zelin_Shao Blog"
      iconElementRight={ <RightBtn/> }
    iconElementLeft={ <Drawer {...this.props} inputEle = { <NaviMenu/> } /> }
    />)
  }
}

export default MuiBar
