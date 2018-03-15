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
      { title: 'All', logo: 'a' },
      { title: 'Work', logo:'w' }, 
      { title: 'Study', logo: 's' },
      { title: 'Life', logo: 'l' },
      { title: 'Chicken', logo: 'c' }
    ] } = this.props
    return (
      <SelectableList style={this.style} 
        value={this.state.selectedIndex} >
        <Subheader>Categories</Subheader>
        {categories.map((item, index) => {
          return (
            <ListClick {...this.props} item = {item} index = {index} />)
        })}
      </SelectableList>
    )
  }
}

class ListClick extends Component {

  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  componentDidUpdate() {
    // this.setState({
    //   index:this.state.index++
    // })
  }

  componentDidMount() {
  }

  render() {
  
    const { item, index, relationUpdate } = this.props
    return(
      <ListItem
        key={index}
          primaryText={item.title}
        onClick = { () => {  
          this.context.router.history.push(`/post/${item.title}`)
          console.log(this.context.router.route.match.params,this.props.relation)
          relationUpdate({ cate: item.title })
 
        } }
        value={`/posts/item._id/${index}`} leftIcon={
          <FontIcon className="material-icons"
            >{item.logo}</FontIcon>
      } />
    )

  }

}

export default SideBar
