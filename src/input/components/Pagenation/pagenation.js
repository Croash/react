import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import Pagination from 'rc-pagination'
import 'rc-pagination/assets/index.css'

class Pagenation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 12,
      pageSize: 5
    }
  }

  onChange = (page) => {
    const { onChange } = this.props
    console.log(page)
    onChange(page)
    this.setState({
      current: page
    })
  }
  render() {
    const {
      defaultSize = 8,
      pageSize = this.state.pageSize,
      current = this.state.current
    } = this.props
    return (<Pagination
      defaultCurrent={34}
      current={current}

      defaultPageSize={defaultSize}
      pageSize={pageSize}

      hideOnSinglePage={true}
      onChange={this.onChange} 
      total={99} />)
  }
}

export default Pagenation
