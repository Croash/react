import React, { Component } from 'react'

import { List, ListItem, makeSelectable } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import Divider from 'material-ui/Divider'
import FontIcon from 'material-ui/FontIcon'
import ActionLabel from 'material-ui/svg-icons/action/label'

const SelectableList = makeSelectable(List)

class NavigationMenu extends Component {

  style = {
    drawer: { paddingTop: '5%' }, 
    iconStyle: { marginRight: 24 }, 
    topList: { marginBottom: '3%' }
  }

  componentWillMount() {
    this.setState({
      selectedIndex: this.props.defaultValue
    })
  }

  handleChange = (event, index) => {
  
    this.setState({ selectedIndex: index })
    // this.context.router.push(index)
  }

  render() {
    const { categories = [ { title:1 }, { title:2 } ] } = this.props
    return (
      <Drawer docked={true} containerStyle={this.style.drawer}>
        <SelectableList style={this.style.topList} 
          value={this.state.selectedIndex} onChange={this.handleChange}>
          <Subheader>Categories</Subheader>
          <ListItem
            primaryText="ALL POSTS"
            value="/posts" leftIcon={
              <FontIcon className="material-icons"
                style={this.style.iconStyles}>home</FontIcon>
            } />
          {categories.map((item, index) => {
            return (
              <ListItem
                key={index}
                  primaryText={item.title}
                value={'/posts/" + item._id + "/1'} leftIcon={
                  <FontIcon className="material-icons"
                    style={this.style.iconStyles}>{item.logo}</FontIcon>
                  } />)
          })}
        </SelectableList>
          <Divider /> <br />
          <SelectableList onChange={(evt, value) => {
            window.open(value)
          }}>
          <Subheader>Links</Subheader>
          <ListItem primaryText="GitHub" value="https://github.com/Croash" leftIcon={<ActionLabel />} />
        </SelectableList>
      </Drawer>
    )
  }
}
export default NavigationMenu
