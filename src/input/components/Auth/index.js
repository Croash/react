import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import Auth from './Auth'

const contentStyle = { 
  border: '2px red',
  paddingLeft: '15%', 
  paddingRight: '15%', 
  paddingTop: '64px',
  minHeight: '700px'
}


export default class authWrap extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  render() {
    const { route:{ match } } = this.context.router
    const { params:{ cate } } = match
    console.log(this.props)
    return ( 
      <div style={contentStyle}>
        <Auth  {...this.props}/>
      </div>
    )
  }

}
