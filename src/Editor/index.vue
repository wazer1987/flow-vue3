<template>
  <div class="materials-editor">
    <ToolBar />
    <PanelLeft :materialList="material.list" />
   
    <PanelRight :editorConfig="state.editorConfig"
                :toolList="state.toolList"
                :currentItem="state.currentItem" 
                />
               
    <Sketchpad />
  </div>
</template>

<script setup>
import { reactive, onMounted} from 'vue'
import PanelLeft from '@/Editor/containers/PanelLeft.vue'
import PanelRight from '@/Editor/containers/PanelRight.vue'
import ToolBar from '@/Editor/containers/ToolBar.vue'
import Sketchpad from '@/Editor/containers/Sketchpad.vue'
import materials from '@/config/materials.js'
import tool from '@/config/tools.js'
import system from '@/config/system.js'
import G6 from '@/Editor/g6/index.js'
import * as G6Util from '@antv/util'
import emitter from '@/utils/index.js'
let graph = null
let state = reactive({
  currentItem:[],
  editorConfig:{},
  toolList:[]
})

state.toolList= tool(system)
onMounted(() => {
  
  graph = G6.init()
  state.editorConfig = graph.$C
  // 鼠标进入显示锚点
  graph.on('node:mouseover', nodeHover)
  // 鼠标离开隐藏锚点
  graph.on('node:mouseout', nodeOut)
  graph.on('editor:getItem', function (data) {
    state.currentItem = data
  })
  graph.on('node:mousedown', nodeMousedown)
  graph.on('canvas:mousedown', canvasMousedown)
  graph.on('editor:setItem',(data) => {
    console.log(data,'===data');
    data.forEach((item ,index) => {
      const model = item.model
      const shapeItem = graph.findById(item.id)
      if(!index){
        graph.updateItem(shapeItem,model)  
      }else{
        graph.updateItem(shapeItem,{
          style:data[0].model.style
        })
      }
    })
    graph.paint()
  })


})


// 清除所有的 状态 比如 显示锚点 等
const canvasMousedown = () => {
  doClearAllStates()
  // 更新currentItem
  currentItem = []
}

// 鼠标点击节点 显示控制边框和控制节点
const nodeMousedown = (event) => {
  // 先清除所有的选中状态
  doClearAllStates()
  graph.setItemState(event.item, 'active', true)
}
//先清除所有的选中状态
const doClearAllStates = () => {
  if (!graph) {
    return
  }
  // 批量操作时关闭自动重绘，以提升性能
  graph.setAutoPaint(false)
  graph.getNodes().forEach(function (node) {
    graph.clearItemStates(node, ['active', 'hover', 'selected'])
  })
  graph.getEdges().forEach(function (edge) {
    graph.clearItemStates(edge, ['active', 'hover', 'selected'])
  })
  graph.paint()
  graph.setAutoPaint(true)
}
// 鼠标进入显示锚点 回调函数 触发自定义节点的 base中的 setState 函数
const nodeHover = (event) => {
  if (!event.item.hasState('active')) {
    graph.setItemState(event.item, 'hover', true)
  }
}
// 鼠标离开隐藏锚点 回调函数 触发自定义节点的 base中的 setState 函数
const nodeOut = (event) => {
  graph.setItemState(event.item, 'hover', false)
}
const material = reactive({
  list: [],
})
material.list = materials()
// 添加节点
const doAddNode = (info) => {
  const node = {
    id: G6Util.uniqueId(),
    draggable: true,
    type: info.type,
    label: info.defaultLabel,
    labelCfg: {
      position: 'center',
      style: {
        fontSize: 16,
        stroke: '#000000',
      },
    },
    width: info.width,
    height: info.height,
    minWidth: info.minWidth,
    minHeight: info.minHeight,
    // FIXME 定义锚点坐标
    anchorPoints: info.anchorPoints,
    // 定义shapeControl
    shapeControl: info.shapeControl,
  }
  // 广播事件，通过自定义交互 node-control 添加节点
  graph.emit('editor:addNode', node)
}
emitter.on('editor/add/node', doAddNode)
emitter.on('editor/currentItem/update', (data) => {
  graph.emit('editor:setItem',data)
})
</script>

<style>
.materials-editor {
  width: 100%;
  height: 100%;
}
</style>
