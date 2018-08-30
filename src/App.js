import React, { Component } from 'react'
import Input from './input'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter as Router, Link, Route, Switch, Redirect, withRouter } from 'react-router-dom'
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
            <Switch>
              <Route path = {'/main'} exact component = { Input } forceRefresh = { false }></Route>
              <Route path = {'/post/:cate'} exact component = { Input } forceRefresh = { false } ></Route>
              <Route path = {'/post/:cate/:id'} exact component = { Input } forceRefresh = { false } ></Route>
              <WrapRoute wrapPath={'/:motherfucker'} activeOnlyWhenExact={false} label={'wrapPath'} />
              <Redirect from={'/'} to="/main"/>
            </Switch>
          </Router>
        </div>
      </MuiThemeProvider>
    )
  }
}

const wrapRoute = (props) => {
  const { label, wrapPath, activeOnlyWhenExact } = props
  console.log(props)
  return (<Route
    path={wrapPath}
    exact={activeOnlyWhenExact}
    children={({ match }) => {
      console.log(match)
      return (<div className={match ? 'active' : ''}>
        {match ? '> ' : ''}
        <Link to={wrapPath}>{label}</Link>
      </div>)

    }}
  />)
}

const WrapRoute = withRouter(wrapRoute)


export default App
