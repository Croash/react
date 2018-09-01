import React,{ Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  }
})

const InputWithIcon = (props = { classes:{ margin: { margin:'8px' } } }) => {
  const classes = { margin: { margin:'8px' } }
  return (<div style={{ textAlign:'center', verticalAlign: 'middle' }}>
    <TextField
      style={classes.margin}
      id="input-with-icon-textfield"
      label="UserName"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        )
      }}
    />
    <TextField
      style={classes.margin}
      id="input-with-icon-textfield"
      label="PassWord"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>

        )
      }}
    />
    <Button>Log In</Button>
  </div>)
}

export default withStyles(styles)(InputWithIcon)
