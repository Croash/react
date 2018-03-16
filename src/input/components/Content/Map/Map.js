import React,{ Component } from 'react'
import { Map } from 'react-amap'
import { Wrapper as Wrap, DistrictExplorer } from 'react-amapui-wrapper'

class MapUIComponent extends Component {
  render() {
    return (
      <div style={{ width:'600px', height:'400px' }}>
        <Map>
          <Wrap>
            <DistrictExplorer>
              events = {{}}
              eventSupport = {true}
              instanceName = {'DistrictExplorer'}
            </DistrictExplorer>
          </Wrap>
        </Map>
      </div>
    )
  }
}

export default MapUIComponent
