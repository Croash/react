import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import Markdown from 'react-markdown'
import demo from './demo'

const style = { paddingLeft: '15%', paddingRight: '15%', paddingTop: '64px' }

class Writer extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      markdownSrc: demo.All,
      htmlMode: 'sg'
    }
  }
  render() {
    const { route:{ match } } = this.context.router
    const { params:{ cate } } = match
    return (
      <Markdown
        className="result"
        style={{ height:'1000px',width:'1000px' }}
        source={ demo[cate] } 
        skipHtml={ this.state.htmlMode === 'skip' }
        escapeHtml={ this.state.htmlMode === 'escape' }
      />
    )
  }
}

export default Writer
