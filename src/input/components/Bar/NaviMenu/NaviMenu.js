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
    const { onRequestChange = ()=>{}, relationUpdate, relation } = this.props
    const { open } = relation
    console.log(open)
    return (
      <Drawer 
        open={open}
        docked={true} 
        containerStyle={style}
        onRequestChange={ () => { relationUpdate({ open:false }) } }>
        <SideBar/>
        <Divider /> 
        <br />
        <SelectLink/>
      </Drawer>
    )
  }
}

export default NavigationMenu
