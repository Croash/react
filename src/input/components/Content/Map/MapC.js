import React,{ Component } from 'react'
import { Map } from 'react-amap'

const containerStyle = {
  width: '100%',
  height: '100%'
}
const wrapperStyle = {
  width: '100%',
  height: '100%',
  position: 'relative'
}

class MapC extends Map {
  render() {
    return (<div style={wrapperStyle}>
      <div ref={(div)=>{ this.mapWrapper = div }} style={containerStyle}>
      {
        this.state.mapLoaded ? null : this.props.loading || null
      }
      </div>
      <div>{ this.state.mapLoaded ? this.renderChildren() : null }</div>
    </div>)
  }
}

export default MapC

