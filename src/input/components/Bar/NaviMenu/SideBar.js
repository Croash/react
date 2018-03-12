import React,{ Component } from 'react'
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
    this.setState({ selectedIndex: index })
  }

  render() { 
    const { categories = [ 
      { title: 'WORK', logo:'w' }, 
      { title: 'STUDY', logo: 's' },
      { title: 'LIFE', logo: 'l' },
      { title: 'CHICKEN', logo: 'c' }
    ] } = this.props
    
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
