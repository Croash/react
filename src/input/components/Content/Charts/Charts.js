import React,{ Component } from 'react'
import Markdown from 'react-markdown'
import demo from './demo'
import Auth from '../Auth'

const style = { height:'1000px',width:'1000px' }
class MapDes extends Component {

  constructor(props) {
    super(props)
    this.state = {
      htmlMode: 'sg'
    }
  }

  render() {
    return (
      <div>
        <Markdown
          className="result"
          style={{ height:'1000px',width:'1000px' }}
          source={ demo } 
          skipHtml={ this.state.htmlMode === 'skip' }
          escapeHtml={ this.state.htmlMode === 'escape' }
        />
        <Auth/>
      </div>
    )
  }

}

export default MapDes
