import React,{ Component } from 'react'
import { PropTypes } from 'prop-types'
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

class InputWithIcon extends Component {

  state = {
    usr: '',
    pwd: ''
  }

  render() {
    const classes = { margin: { margin:'8px' } }
    const { normalUpdate } = this.props
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
        onChange={
          (e)=>{ 
            this.setState({ usr: e.target.value }) 
          }
        }
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
        onChange={
          (e)=>{ 
            this.setState({ pwd: e.target.value }) 
          }
        }
      />
      <div>
        <Button style={{ marginTop:'18px' }} 
          onClick={()=>{
            normalUpdate({ _login_: true, usr: this.state.usr, pwd: this.state.pwd })
          }}>Sign In</Button>
      </div>
    </div>)
  }
}

export default withStyles(styles)(InputWithIcon)
