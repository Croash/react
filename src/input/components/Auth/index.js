import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import Auth from './Auth'
import './style.css'

export default class authWrap extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  render() {
    const { route:{ match } } = this.context.router
    const { params:{ cate } } = match
    console.log(this.props)
    return ( 
      <div className="auth">
        <Auth  {...this.props}/>
      </div>
    )
  }

}
