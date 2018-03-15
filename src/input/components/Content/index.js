import React,{ Component } from 'react'
import Writer from './Writer'

class Content extends Writer {
  render() {
    return <Writer { ...this.props } />
  }
}

export default Content
