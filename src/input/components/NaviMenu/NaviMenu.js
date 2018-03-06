import React, { Component } from 'react'

import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'

import SelectLink from './SelectLink'
import SideBar from './SideBar'

const style = {
  paddingTop: '1%' 
}

const NavigationMenu = () => (
  <Drawer docked={true} containerStyle={style}>
    <SideBar/>
    <Divider /> 
    <br />
    <SelectLink/>
  </Drawer>
)

export default NavigationMenu
