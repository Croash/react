import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import Writer from './Writer'
import Map from './Map'
import Charts from './Charts'
import Pagenation from './Pagenation'

import Widgets from '../Widgets'
const { Paper } = Widgets

const compList = {
  Writer,
  Map,
  Charts
}

const contentStyle = { 
  border: '2px red',
  paddingLeft: '15%', 
  paddingRight: '15%', 
  paddingTop: '64px',
  minHeight: '700px',
  paddingBottom: '300px'
}

class Content extends Writer {

  static contextTypes = {
    router: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  }

  render() {
    const { route:{ match:{ params:{ cate } } } } = this.context.router
    const { page=0, content = [] }  = this.context.store.getState().pagination

    let ShowContent = compList[cate]!=undefined ? compList[cate]:compList['Writer']
    return ( 
      <div className={'content'}>
        <ShowContent { ...this.props } />
      </div>
    )
  }
}

export default Content
