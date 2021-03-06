import React,{ Component } from 'react'
import { DistrictExplorer } from 'react-amapui-wrapper'

class DeComp extends DistrictExplorer {

  componentWillMount() {
    this.instanceName = 'districtExplorer'
  }


  // render AllPage
  initPage() {
    let adcode = '110000' //全国的区划编码
    this.currentAreaNode = adcode
    this[this.instanceName].loadAreaNode(this.props.initialAdcode, (error, areaNode)=> {
 
      if (error) {
        console.error(error)
        return
      }
      //绘制载入的区划节点
      this.renderAreaNode(this[this.instanceName], areaNode)
    })
  }

  // render accoding to areaNode
  renderAreaNode(districtExplorer, areaNode, parentColors, childColors) {
    // 清除已有的绘制内容
    this[this.instanceName].clearFeaturePolygons()
  
    //just some colors
    let colors = [ '#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6', '#dd4477', '#66aa00' ]
  
    //renderSubFeatures
    this[this.instanceName].renderSubFeatures(areaNode, (feature, i) => {
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
    this[this.instanceName].renderParentFeature(areaNode, {
      cursor: 'default',
      bubble: true,
      strokeColor: 'black', //线颜色
      fillColor: null,
      strokeWeight: 3 //线宽
    })
  
    //更新地图视野以适合区划面
    this.map.setFitView(this[this.instanceName].getAllFeaturePolygons())
  }

}

export default DeComp
