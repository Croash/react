import React,{ Component } from 'react'
import { Map } from 'react-amap'
import { Wrapper as Wrap/* , DistrictExplorer */ } from 'react-amapui-wrapper'
import DistrictExplorer from './DistrictExplorer'

window.amapkey = '9c25aa5d8e6f9a6cf1bbfc6655aca2fd'

class MapUIComponent extends Component {

  componentWillUnmount() {
    // this.map.destroy()
  }

  renderAreaNode(districtExplorer, areaNode, parentColors, childColors) {
    // 清除已有的绘制内容
    districtExplorer.clearFeaturePolygons()
  
    //just some colors
    let colors = [ '#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6', '#dd4477', '#66aa00' ]
  
    //renderSubFeatures
    districtExplorer.renderSubFeatures(areaNode, (feature, i) => {
      let fillColor = colors[i % colors.length]
      let strokeColor = colors[colors.length - 1 - i % colors.length]
      return {
        cursor: 'default',
        bubble: true,
        strokeColor: strokeColor, //线颜色
        strokeOpacity: 1, //线透明度
        strokeWeight: 1, //线宽
        fillColor: fillColor, //填充色
        fillOpacity: 0.35 //填充透明度
      }
    })
  
    //绘制父级区划，仅用黑色描边
    districtExplorer.renderParentFeature(areaNode, {
      cursor: 'default',
      bubble: true,
      strokeColor: 'black', //线颜色
      fillColor: null,
      strokeWeight: 3 //线宽
    })
  
    //更新地图视野以适合区划面
    this.map.setFitView(districtExplorer.getAllFeaturePolygons())
  }

  districtEvents = {
    created: (districtExplorer)=>{
      this.districtExplorer = districtExplorer
    },
    featureClick: (e,feature) => {
      this.districtExplorer.loadAreaNode(feature.properties.adcode, (error, areaNode)=> {
        if (error) {
          console.error(error)
          return
        }
        this.renderAreaNode(this.districtExplorer, areaNode)
      })
    },
    featureMouseover: (e,feature)=>{
    },
    featureMouseout: (e,feature)=>{
    },
    featureMousemove: (e,feature)=>{
    },
    outsideClick: (e,feature)=>{
    }
    ,closed: ()=>{ console.log('close') }
  }

  render() {
    return (
      <div style={{ width:'600px', height:'400px', paddingTop:'30px' }}>
        <Map useAMapUI={true} 
          events = {{ created:(ins) => { this.map = ins } }}
          >
          <Wrap>
            <DistrictExplorer
              events = {this.districtEvents}
              eventSupport = {true}
              initialAdcode={100000}
              instanceName = {'DistrictExplorer'}>
            </DistrictExplorer>
          </Wrap>
        </Map>
      </div>
    )
  }
}

export default MapUIComponent
