import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'

import SelectLink from './SelectLink'
import SideBar from './SideBar'

const style = {
  paddingTop: '2%',
  marginTop:'64px' 
}

class NavigationMenu extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { relationUpdate, relation } = this.props
    const { open } = relation
    return (
      <Drawer
        style = {{}}
        open={open}
        docked={true} 
        containerStyle={style}>
        <SideBar {...this.props}/>
        <Divider /> 
        <br />
        <SelectLink/>
      </Drawer>
    )
  }
}

export default NavigationMenu
