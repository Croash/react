import React,{ Component } from 'react'
import Markdown from 'react-markdown'
import demo from './demo'

const style = { height:'1000px',width:'1000px' }
class Description extends Component {

  constructor(props) {
    super(props)
    this.state = {
      htmlMode: 'sg'
    }
  }

  render() {
    return (
        <Markdown
          className="result"
          style={{ height:'1000px',width:'1000px' }}
          source={ demo } 
          skipHtml={ this.state.htmlMode === 'skip' }
          escapeHtml={ this.state.htmlMode === 'escape' }
        />
    )
  }

}

export default Description
