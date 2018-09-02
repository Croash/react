import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import Pagination from 'rc-pagination'
import 'rc-pagination/assets/index.css'

class Pagenation extends Component {
  state = {
    current: 3
  };
  onChange = (page) => {
    console.log(page)
    this.setState({
      current: page
    })
  }
  render() {
    return <Pagination onChange={this.onChange} current={this.state.current} total={25} />
  }
}

export default Pagenation
