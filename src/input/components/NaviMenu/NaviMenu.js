import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'

import SelectLink from './SelectLink'
import SideBar from './SideBar'

const style = {
  paddingTop: '5%' 
}

class NavigationMenu extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { open = false } = this.props
    return (
      <Drawer 
        open={open}
        docked={true} containerStyle={style}>
        <SideBar/>
        <Divider /> 
        <br />
        <SelectLink/>
      </Drawer>
    )
  }
}

export default NavigationMenu
