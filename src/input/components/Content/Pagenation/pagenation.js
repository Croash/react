import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import Pagination from 'rc-pagination'
import 'rc-pagination/assets/index.css'

class Pagenation extends Component {
  state = {
    current: 12,
    pageSize: 5
  };
  onChange = (page) => {
    console.log(page)
    this.setState({
      current: page
    })
  }
  render() {
    return (<Pagination 
      onChange={this.onChange} 
      current={this.state.current}
      pageSize={this.state.pageSize}
      hideOnSinglePage={true}
      total={25} />)
  }
}

export default Pagenation
