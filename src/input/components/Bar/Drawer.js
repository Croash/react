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

  render() {

    let { inputEle, update, relation, relationUpdate } = this.props
    const { open } = relation
    return (
      <div>
        <RaisedButton
          label="Open Drawer"
          onClick={ () => {
            relationUpdate({ open:!open })
          } }
        />
        <NaviMenu { ...this.props }/>
      </div>
    )
  }
}
