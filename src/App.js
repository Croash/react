import React, { Component } from 'react'
import Input from './input'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Redirect } from 'react-router'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import './App.css'

class Test extends Component {
  render() {
    return (
      <div style = {{ width:'1000px',height:'1000px',backgroundColor:'red' }}>
        sgsg
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <BrowserRouter basename = {'/'}>
            <div>
              <Route path = {'/input'}
                component = { Input }
                forceRefresh = { false }
              >
              </Route>
              <Route path = {'/test'}
                component = { Test }
                forceRefresh = { false }
              >
              </Route>
            </div>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
