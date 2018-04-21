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

// let loadFinished= ()=>{
//   let app = document.getElementsByClassName('App')[0]
//   let body = document.getElementsByTagName('body')[0]

//   let winWidth = window.innerWidth
//   let appWidth = app.clientWidth
//   let widthScale = winWidth/appWidth

//   let winHeight = window.innerHeight
//   let appHeight = app.clientHeight
//   let heightScale = winHeight/appHeight

  
//   let resScale = widthScale>heightScale?heightScale:widthScale
//   console.log(winWidth,appWidth,resScale,body)
//   app.style['transform']=`scale(${resScale})`
//   app.style['transform-origin']='top'

//   body.style['width']=appWidth*resScale
//   body.style['height']=appHeight *resScale

//   // app.style['top']=0
// }

// window.onload = loadFinished

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App" >
          <Router basename = {'/'}>
            <Switch>
              <Route path = {'/main'} exact component = { Input } forceRefresh = { false }>
              </Route>
              <Route path = {'/post/:cate'} exact component = { Input } forceRefresh = { false } ></Route>
              <Route path = {'/post/:cate/:id'} exact component = { Input } forceRefresh = { false } ></Route>
              <Redirect from={'/'} to={'/main'}/>
            </Switch>
          </Router>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
