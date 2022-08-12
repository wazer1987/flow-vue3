import G6 from '@antv/g6'
import registerNode from './node/index.js'
import registerBehavior from './behavior/index.js'
import config from './config/index.js'
const grid = new G6.Grid()
export const init = function () {
  registerBehavior(G6)
  registerNode(G6)
  const graph = new G6.Graph({
    container: document.getElementById('sketchpad'), // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
    width: window.innerWidth, // Number，必须，图的宽度
    height: window.innerHeight, // Number，必须，图的高度
    fitView: true,
    fitViewPadding: 20,
    modes:{
      default:['node-control']
    },
    // edit: [
    //   {
    //     type: 'node-control',
    //     config: {
    //       shapeControlPoint: {
    //         // 是否在缩放、旋转节点时更新所有与之相连的边
    //         updateEdge: false
    //       },
    //       dragNode: {
    //         // 是否在拖拽节点时更新所有与之相连的边
    //         updateEdge: false
    //       },
    //       // 是否支持在节点上添加文本
    //       nodeLabel: true,
    //       // 是否支持在边上添加文本
    //       edgeLabel: true,
    //       // tooltip 是否启用
    //       tooltip: {
    //         shapeControl: true,
    //         dragNode: true,
    //         dragEdge: true
    //       },
    //       // 是否启用对齐线
    //       alignLine: {
    //         enable: true,
    //         style: {
    //           stroke: '#FFA500',
    //           lineWidth: 1
    //         }
    //       }
    //     }
    //   }
    // ],
    plugins:[
      grid
    ]
  });
  graph.$D = {
    fill: '#fff',
    fillOpacity: 1,
    lineColor: '#000000',
    strokeOpacity: 1,
    lineWidth: 1,
    lineType: 'x-line',
    lineDash: 'solid',
    startArrow: false,
    endArrow: false,
    lineAppendWidth: 10,
    autoRotate: true
  }
  graph.$C = config
  return graph
}
