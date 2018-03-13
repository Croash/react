import React, { Component } from 'react'
import Input from './input'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'
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
          <Router basename = {'/'}>
            <div>
              <Switch>
                <Route path = {'/main'} component = { Input } forceRefresh = { false } >
                  <Switch>
                    <Route exact path = {'/1'} component = { <div>1</div> } forceRefresh = { false } />
                    <Route exact path = {'/2'} component = { <div>2</div> } forceRefresh = { false } />
                  </Switch>
                </Route>
                <Route path = {'/test'} component = { Test } forceRefresh = { false } ></Route>
                <Redirect from={'/'} to={'/main'}/>
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
