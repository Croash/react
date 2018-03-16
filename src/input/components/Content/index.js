import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import Writer from './Writer'
import Map from './Map'
import Charts from './Charts'

const compList = {
  Writer,
  Map,
  Charts
}

const contentStyle = { 
  paddingLeft: '15%', 
  paddingRight: '15%', 
  paddingTop: '64px' 
}

class Content extends Writer {

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  render() {
    const { route:{ match } } = this.context.router
    const { params:{ cate } } = match
    // let list = 
    console.log(cate)
    let ShowContent = compList[cate]!=undefined ? compList[cate]:compList['Writer']
    return ( 
      <div style={contentStyle}>
        <ShowContent { ...this.props } />
      </div>
    )
  }
}

export default Content
