import React,{ Component } from 'react'
import Markdown from 'react-markdown'
import demo from './demo'

const style = { paddingLeft: '15%', paddingRight: '15%', paddingTop: '64px' }

class Writer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      markdownSrc: demo.All,
      htmlMode: 'sg'
    }
  }
  render() {
    // console.log(this.props)
    const { relation:{ cate = 'All' } } = this.props
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
