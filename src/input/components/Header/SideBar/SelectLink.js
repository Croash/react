import React,{ Component } from 'react'
import { List, ListItem, makeSelectable } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'

import FontIcon from 'material-ui/FontIcon'
import ActionLabel from 'material-ui/svg-icons/action/label'

const SelectableList = makeSelectable(List)

class SelectLink extends Component {
  render() {
    return (
      <SelectableList onChange={(evt, value) => {
        window.open(value)
      }}>
        <Subheader>Links</Subheader>
        <ListItem primaryText="GitHub" value="https://github.com/Croash" leftIcon={<ActionLabel />} />
        <ListItem primaryText="Bolg" value="https://croash.github.io" leftIcon={<ActionLabel />} />
      </SelectableList>
    )
  }
}

export default SelectLink
