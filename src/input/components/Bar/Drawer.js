import React,{ Component } from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import NaviMenu from './NaviMenu'

export default class DrawerUndockedExample extends Component {

  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  handleToggle = () => { 
    const { update, list } = this.props
    console.log(list)
    this.setState({ open: !this.state.open }) 
  }

  handleClose = () => { 
    const { update } = this.props
    this.setState({ open: false }) 
  }

  render() {

    let { inputEle, update, relation, relationUpdate } = this.props
    console.log(relation.open,this.props)
    return (
      <div>
        <RaisedButton
          label="Open Drawer"
          onClick={ () => {
            relationUpdate({ open:true })
          } }
        />
        <NaviMenu { ...this.props }/>
      </div>
    )
  }
}
