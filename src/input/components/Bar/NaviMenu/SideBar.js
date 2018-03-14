import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import { List, ListItem, makeSelectable } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import MenuItem from 'material-ui/MenuItem'
import FontIcon from 'material-ui/FontIcon'

const SelectableList = makeSelectable(List)

class SideBar extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

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
        value={this.state.selectedIndex} >
        <Subheader>Categories</Subheader>
        <ListItem
          primaryText="ALL POSTS"
          value="/posts" leftIcon={
            <FontIcon className="muidocs-icon-action-home"
              style={this.style.iconStyles}>sg</FontIcon>
          } />
        {categories.map((item, index) => {
          return (
            <ListClick item = {item} index = {index}/>)
        })}
      </SelectableList>
    )
  }
}

class ListClick extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  componentDidUpdate() {
    console.log(this.props)
  }

  componentDidMount() {
    console.log('mount')
    console.log(this.props)
  }

  render() {
  
    const { item, index } = this.props
    return(
      <ListItem
        key={index}
          primaryText={item.title}
        onClick = { () => {  console.log(this.context.router.route.match.params)
          this.context.router.history.push(`/post/${item.title}`) } }
        value={`/posts/item._id/${index}`} leftIcon={
          <FontIcon className="material-icons"
            >{item.logo}</FontIcon>
      } />
    )

  }

}

export default SideBar
