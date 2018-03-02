import React, { Component } from 'react'
import Input from './input'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Input/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
