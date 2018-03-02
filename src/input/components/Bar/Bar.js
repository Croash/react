import React from 'react'
import AppBar from 'material-ui/AppBar'
import RightBtn from './RightBtn'
import Drawer from './Drawer'

const MuiBar = () => (
  <AppBar 
    label="Default"     
    title="Zelin_Shao Blog"
    iconElementRight={ <RightBtn/> }
    iconElementLeft={ <Drawer/> }
  />
)

export default MuiBar
