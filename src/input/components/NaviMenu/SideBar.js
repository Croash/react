import React, { Component } from 'react'

import { List, ListItem, makeSelectable } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import MenuItem from 'material-ui/MenuItem'
import FontIcon from 'material-ui/FontIcon'

const SelectableList = makeSelectable(List)

class SideBar extends Component {

  style = {
    marginBottom: '3%'
  }

  componentWillMount() {
    const { defaultValue = 0 } = this.props
    this.setState({
      selectedIndex: defaultValue
    })
  }

  handleChange = (event, index) => {
    console.log(index)
    this.setState({ selectedIndex: index })
    // this.context.router.push(index)
  }

  render() { 
    const { categories = [ { title: 1, logo:'12g' }, { title: 2, logo: 'sg' } ] } = this.props
    
    return (
      <SelectableList style={this.style} 
        value={this.state.selectedIndex} onChange={this.handleChange}>
        <Subheader>Categories</Subheader>
        <ListItem
          primaryText="ALL POSTS"
          value="/posts" leftIcon={
            <FontIcon className="muidocs-icon-action-home"
              style={this.style.iconStyles}>sg</FontIcon>
          } />
        {categories.map((item, index) => {
          console.log(index)
          return (
            <ListItem
              key={index}
                primaryText={item.title}
              value={`/posts/item._id/${index}`} leftIcon={
                <FontIcon className="material-icons"
                  style={this.style.iconStyles}>{item.logo}</FontIcon>
                } />)
        })}
      </SelectableList>
    )
  }
}

export default SideBar
