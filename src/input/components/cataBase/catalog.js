

import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import Pagenation from '../Pagenation'

import Widgets from '../Widgets'
const { Paper } = Widgets

class Catalog extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  }

  render() {
    const { route:{ match:{ params:{ cate } } } } = this.context.router
    const { page=0, content = [] }  = this.context.store.getState().pagination

    return ( 
      <div className={'content'}>
        {
          content.map(c=><Paper {...c} />)
        }
        <Pagenation/>
      </div>
    )
  }
}

export default Catalog
