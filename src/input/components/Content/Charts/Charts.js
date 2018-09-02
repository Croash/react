import React,{ Component } from 'react'
import Markdown from 'react-markdown'
import MDsrc from './demo'

const style = { height:'100%',width:'100%' }
class MapDes extends Component {

  constructor(props) {
    super(props)
    this.state = {
      htmlMode: 'sg'
    }
  }

  render() {
    return (
      <div style={{ width:'100%', height:'100%' }}>
        <Markdown
          className="result"
          style={{ height:'1000px',width:'1000px' }}
          source={ MDsrc } 
          skipHtml={ this.state.htmlMode === 'skip' }
          escapeHtml={ this.state.htmlMode === 'escape' }
        />
      </div>
    )
  }

}

export default MapDes
