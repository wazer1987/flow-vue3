/**
 * Created by OXOYO on 2019/8/29.
 *
 * 节点基础方法
 */
 import * as G6Util from '@antv/util'
 import utils from '../utils'
 
 export default {
   type: null,
   // 自定义节点配置，需要配置时在各个图形中覆写
   options: {},
   drawShape (cfg, group) {
     const shapeType = this.shapeType
     const style = this.getShapeStyle(cfg)
     const keyShape = group.addShape(shapeType, {
       attrs: style,
       name: 'XFCNodeKeyShape',
       draggable: true
     })
     this.keyShape = keyShape
     return keyShape
   },
   getAnchorPoints (cfg) {
     const { anchorPoints, width, height } = cfg
     const keyShape = this.keyShape
     const points = []
     if (anchorPoints && anchorPoints.length) {
       for (let i = 0, len = anchorPoints.length; i < len; i++) {
         const point = keyShape.getPoint((i + 1) / len)
         // 方式一：通过坐标反推占比
         const x = point.x
         const y = point.y
         // 坐标系转换
         const x1 = width / 2 + x
         const y1 = height / 2 + y
         // 百分比
         const px = x1 / width
         const py = y1 / height
         points.push([ px, py ])
         // 方式二：覆盖坐标，有BUG
         // points.push([...anchorPoints[i], {
         //   x: bbox.minX + point.x,
         //   y: bbox.minY + point.y
         // }])
       }
     }
     return points
   },
   setState (name, value, item) {
    //  console.log(name,'===name',value,'====value');
     // 设置锚点状态
     utils.anchor.setState(name, value, item)
     // 设置shapeControl状态
     utils.shapeControl.setState(name, value, item)
   },
   update (cfg, item) {
     // 自定义节点配置
     const defaultStyle = this.options
     // 从新计算图形样式
     const shapeStyle = this.getShapeStyle(cfg)
     const style = G6Util.mix({}, defaultStyle, shapeStyle)
     // 更新图形
     this.updateShape(cfg, item, style)
   },
   updateShape (cfg, item, style) {
     const keyShape = item.get('keyShape')
     keyShape.attr({
       ...style
     })
     // 更新图形文本
     this.updateLabel(cfg, item)
   },
   // 绘制完成后附加锚点
   afterDraw (cfg, group) {
     // 绘制锚点
     utils.anchor.draw(cfg, group)
     // 绘制shapeControl
     utils.shapeControl.draw(cfg, group)
   },
   // 更新完成后更新锚点
   afterUpdate (cfg, item) {
     const group = item.getContainer()
     // 更新锚点
    //  utils.anchor.update(cfg, group)
     // 更新shapeControl
    //  utils.shapeControl.update(cfg, group) 
   }
 }
//  G6.registerNode('and',{
//   draw(cfg,group){
//     console.log(cfg,'===cfg');
//     const shape = group.addShape('rect',{
//       attrs:{
//         width:60,
//         height:40,
//         x:320,
//         y:100,
//         stroke:    '#AAB7C4',
//       },
//       draggable: true,
//     });
//     group.addShape('path',{
//       attrs:{
//         x: 800,
//         y: 400,
//         height: 80,
//         width: 80,
//         path:[
//           ['M', -10, -10],
//           ['C', 10, -12, 10, 12, -10, 10],
//           ['Z']
//         ],
//         fill: "#FFFFFF",
//         fillOpacity: 1,
//         stroke:    'red',
//       },
//       draggable: true,
//     })
//     return shape
//   }
// },'single-node')