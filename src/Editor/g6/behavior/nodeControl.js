/**
 * Created by OXOYO on 2019/7/17.
 *
 * 综合节点控制交互
 */

import * as G6Util from '@antv/util'
import * as G6DomUtil from '@antv/dom-util'
import config from '../config'
import utils from '../utils'

const TIME_FRAME = 200

export default {
  name: 'node-control',
  options: {
    getDefaultCfg () {
      return {
        config: {
          shapeControlPoint: {
            // 是否在缩放、旋转节点时更新所有与之相连的边
            updateEdge: false
          },
          dragNode: {
            // 是否在拖拽节点时更新所有与之相连的边
            updateEdge: false
          },
          // 是否支持在节点上添加文本
          nodeLabel: true,
          // 是否支持在边上添加文本
          edgeLabel: true,
          // tooltip 是否启用
          tooltip: {
            shapeControl: true,
            dragNode: true,
            dragEdge: false
          },
          // 是否启用对齐线
          alignLine: {
            enable: true,
            style: {
              stroke: '#FA8C16',
              lineWidth: 1
            }
          }
        }
      }
    },
    getEvents () {
      return {

       
        // 'node:dragstart': 'onNodeDragStart',
        // 'node:drag': 'onNodeDrag',
        // 'node:dragend': 'onNodeDragEnd',
        // 'node:mouseup': 'onNodeMouseup',
        // 'node:dblclick': 'onNodeDblclick',
        // 'node:contextmenu': 'onNodeContextmenu',
        // 'edge:mousedown': 'onEdgeMousedown',
        // 'edge:mouseup': 'onEdgeMouseup',
        // 'edge:dblclick': 'onEdgeDblclick',
        // 'edge:contextmenu': 'onEdgeContextmenu',
       
        // 'canvas:mousemove': 'onCanvasMousemove',

        // 'canvas:mouseleave': 'onCanvasMouseleave',
        // 'canvas:contextmenu': 'onCanvasContextmenu',

         'canvas:mousedown': 'onCanvasMousedown',

        // 鼠标点击 创建控制点 和选中状态
        'node:mousedown': 'onNodeMousedown',
        // 创建节点 拖动虚影 事件
        'editor:addNode': 'onEditorAddNode',
        'canvas:mouseup': 'onCanvasMouseup',
        'canvas:mouseenter': 'onCanvasMouseenter',
        'mousemove': 'onMousemove',
        'mouseup': 'onMouseup'
      }
    },

    onCanvasMousedown (event) {
      // console.log('onCanvasMousedown')
      // 非左键忽略
      if (!utils.common.isLeftKey(event)) {
        return
      }
      const _t = this
      // 初始化数据
      _t.info = {
        type: 'drawGroup',
        startPosition: {
          x: event.x,
          y: event.y
        }
      }
      if (_t.info && _t.info.type && _t[_t.info.type].start) {
        _t[_t.info.type].start.call(_t, event)
      }
    },
     // 框选
     drawGroup: {
      isMoving: false,
      // 选框节点
      marqueeNode: null,
      start (event) {
        const _t = this
        _t.drawGroup.isMoving = true
        // 清除已有group
        _t.graph.getNodes().forEach(item => {
          // 更新节点
          _t.graph.updateItem(item, {
            groupId: ''
          })
        })
      },
      move (event) {
        const _t = this
        if (_t.info && _t.drawGroup.isMoving) {
          // 计算坐标、宽高
          const { startPosition } = _t.info
          const x = startPosition.x + (event.x - startPosition.x) / 2
          const y = startPosition.y + (event.y - startPosition.y) / 2
          const width = Math.abs(event.x - startPosition.x)
          const height = Math.abs(event.y - startPosition.y)
          if (!_t.drawGroup.marqueeNode) {
            // 绘制虚线框
            const node = {
              id: G6Util.uniqueId(),
              type: 'rect',
              x: x,
              y: y,
              size: [width, height],
              style: {
                lineWidth: 1,
                stroke: '#29B6F2',
                // lineDash: [ 5, 5 ],
                strokeOpacity: 1,
                fill: '#29B6F2',
                fillOpacity: 0.1,
                opacity: 1,
                minDis: 20,
                maxDis: 40,
                cursor: 'default'
              }
            }
            _t.drawGroup.marqueeNode = _t.graph.addItem('node', node)
          } else {
            _t.graph.updateItem(_t.drawGroup.marqueeNode, {
              x: x,
              y: y,
              size: [width, height]
            })
          }
        }
      },
      stop (event) {
        const _t = this
        // console.log('drawGroup stop')
        if (_t.info && _t.drawGroup.isMoving && _t.drawGroup.marqueeNode) {
          const { minX: marqueeNodeMinX, maxX: marqueeNodeMaxX, minY: marqueeNodeMinY, maxY: marqueeNodeMaxY } = _t.drawGroup.marqueeNode.getBBox()
          // 当前节点数组
          const currentItemArr = []
          const groupId = G6Util.uniqueId()
          const marqueeNodeId = _t.drawGroup.marqueeNode.get('id')
          _t.graph.getNodes().forEach(item => {
            const model = item.getModel()
            const { id } = model
            const { minX, maxX, minY, maxY } = item.getBBox()
            // 判断节点是否在组区域内
            if (id !== marqueeNodeId && minX > marqueeNodeMinX && maxX < marqueeNodeMaxX && minY > marqueeNodeMinY && maxY < marqueeNodeMaxY) {
              // 更新节点
              _t.graph.updateItem(item, {
                groupId
              })
              // 设置激活
              _t.graph.setItemState(item, 'active', true)
              currentItemArr.push({
                type: 'node',
                id: id,
                model: item.getModel()
              })
            }
          })
          // 设置当前节点数组
          _t.graph.emit('editor:getItem', currentItemArr)
          // 删除选框节点
          _t.graph.removeItem(_t.drawGroup.marqueeNode)
        }
        _t.drawGroup.isMoving = false
        _t.drawGroup.marqueeNode = null
      }
    },
    
    // 鼠标点击显示控制锚点 start
    onNodeMousedown (event) {
      if (!utils.common.isLeftKey(event)) {
        return
      }
      const _t = this
      const model = event.item.getModel()
      _t.graph.emit('editor:getItem', [
        {
          type: 'node',
          id: model.id,
          model: model
        }
      ])
      // 初始化数据
      _t.info = {
        type: null,
        node: event.item,
        target: event.target
      }
      // 这里就是开始判断 你选中的是不是 节点上的 控制点
      if (_t.info.target && _t.info.target.attr('name')) {
        console.log(_t.info.target.attr('name'))
        switch (_t.info.target.attr('name')) {
          case 'anchorPoint':
            _t.info.type = 'drawLine'
            break
          case 'shapeControlPoint':
            _t.info.type = 'shapeControlPoint'
            break
          case 'shapeControlRotate':
            _t.info.type = 'shapeControlRotate'
            break
        }
      }
      if (_t.info && _t.info.type && _t[_t.info.type].start) {
        _t[_t.info.type].start.call(_t, event)
      }
    },
    // 图形控制 缩放
    shapeControlPoint: {
      isMoving: false,
      // 是否等比缩放
      isProportional: false,
      // 原始节点信息
      originNodeModel: null,
      start (event) {
        const _t = this
        const model = _t.info.node.getModel()
        _t.shapeControlPoint.originNodeModel = {
          x: model.x,
          y: model.y,
          minWidth: model.minWidth,
          minHeight: model.minHeight,
          size: model.size || []
        }
        _t.shapeControlPoint.isMoving = true
        // 是否等比缩放
        // FIXME !!! 此处应该通过物料配置控制
        _t.shapeControlPoint.isProportional = ['square', 'circle', 'bidirectional-arrow', 'arrow'].includes(model.type)
        // if (_t.config.tooltip.shapeControl) {
        //   _t.toolTip.create.call(_t, {
        //     left: model.x,
        //     top: model.y + model.height / 2
        //   }, `X: ${model.x.toFixed(2)} Y: ${model.y.toFixed(2)}<br>W: ${model.size[0].toFixed(2)} H: ${model.size[1].toFixed(2)}`)
        // }
      },
      move (event) {
        const _t = this
        // 原始信息
        const originNodeModel = _t.shapeControlPoint.originNodeModel
        if (_t.info.node && _t.info.target && originNodeModel && _t.shapeControlPoint.isMoving) {
          const model = _t.info.node.getModel()
          // 判断位置 也就是你点击的控制点的坐标
          const position = _t.info.target.attr('position') || null
          const attrs = {
            x: originNodeModel.x,
            y: originNodeModel.y,
            size: [...model.size]
          }
          // 拿到最开始的 宽高信息
          const width = model.width
          const height = model.height
          if (position) {
            // 参照点，及当前controller的对角点
            // 参照点位置信息 拿到点击控制点对面的坐标点
            const referencePosition = [1 - position.x, 1 - position.y]
            // 相对图形坐标原点，(0,0)点位于图形左上角，与position的坐标系相同
            // 拿到 圆点的坐标 也就是起始点坐标
            const originX = originNodeModel.x - width / 2
            const originY = originNodeModel.y - height / 2
            // 参照点坐标 拿到对点的坐标
            const referencePoint = {
              x: referencePosition[0] * width + originX,
              y: referencePosition[1] * height + originY
            }
            // 计算中心点坐标
            attrs.x = referencePoint.x + (event.x - referencePoint.x) / 2
            attrs.y = referencePoint.y + (event.y - referencePoint.y) / 2
            // 计算图形宽高
            if (_t.shapeControlPoint.isProportional) {
              attrs.size[0] = attrs.size[1] = Math.abs(referencePoint.x - event.x)
            } else if (position.x > 0 && position.x < 1 && (position.y === 0 || position.y === 1)) {
              // 点击纵向中间的上下的两个控制点
              console.log('纵向上下的两个控制点');
              // 这里是 只改变高度 的尺寸 宽度是不变的 那么也就是说 宽度还是原来的尺寸
              // 就等于我点击的对角点的坐标 - 我移动的坐标 
              attrs.x = originNodeModel.x
              attrs.size[0] = originNodeModel.size[0]
              attrs.size[1] = Math.abs(referencePoint.y - event.y)
            } else if (position.y > 0 && position.y < 1 && (position.x === 0 || position.x === 1)) {
              // 点击横向中间的左右的两个控制点
              console.log('向中间的左右的两个控制点');
              attrs.y = originNodeModel.y
              attrs.size[0] = Math.abs(referencePoint.x - event.x)
              attrs.size[1] = originNodeModel.size[1]
            } else {
              attrs.size[0] = Math.abs(referencePoint.x - event.x)
              attrs.size[1] = Math.abs(referencePoint.y - event.y)
            }
            // 处理宽高最小值
            if (attrs.size[0] < originNodeModel.minWidth || attrs.size[1] < originNodeModel.minHeight) {
              return
            }
          } else {
            return
          }
          // 格式化size
          attrs.size[0] = parseInt(attrs.size[0])
          attrs.size[1] = parseInt(attrs.size[1])
          // 设置宽高
          attrs.width = attrs.size[0]
          attrs.height = attrs.size[1]
          // 存储attrs 把计算好的宽高存储一下
          _t.info.attrs = attrs
          // 更新toolTip
          // if (_t.config.tooltip.shapeControl) {
          //   _t.toolTip.update.call(_t, {
          //     left: attrs.x,
          //     top: attrs.y + attrs.size[1] / 2
          //   }, `X: ${attrs.x.toFixed(2)} Y: ${attrs.y.toFixed(2)}<br>W: ${attrs.size[0].toFixed(2)} H: ${attrs.size[1].toFixed(2)}`)
          // }
          // 当前节点容器
          const group = _t.info.node.getContainer()
          // 更新锚点
          utils.anchor.update({
            ..._t.info.node.getModel(),
            width: attrs.size[0],
            height: attrs.size[1]
          }, group)
          // 更新shapeControl
          utils.shapeControl.update({
            ..._t.info.node.getModel(),
            width: attrs.size[0],
            height: attrs.size[1]
          }, group)
          // 更新节点 
          _t.graph.updateItem(_t.info.node, attrs)
          // 刷新一下
          _t.graph.refreshItem(_t.info.node)
          if (_t.config.shapeControlPoint.updateEdge) {
            // 更新边
            utils.edge.update(_t.info.node, _t.graph)
          }
        }
      },
      stop (event) {
        const _t = this
        if (_t.info.node && _t.info.attrs && _t.shapeControlPoint.originNodeModel && _t.shapeControlPoint.isMoving) {
          const attrs = _t.info.attrs
          // 当前节点容器
          const group = _t.info.node.getContainer()
          // 更新锚点
          utils.anchor.update({
            ..._t.info.node.getModel(),
            width: attrs.size[0],
            height: attrs.size[1]
          }, group)
          // 更新shapeControl
          utils.shapeControl.update({
            ..._t.info.node.getModel(),
            width: attrs.size[0],
            height: attrs.size[1]
          }, group)
          // 更新节点
          _t.graph.updateItem(_t.info.node, attrs)
          if (_t.config.shapeControlPoint.updateEdge) {
            // 更新边
            utils.edge.update(_t.info.node, _t.graph)
          }
          // 记录操作日志
          _t.graph.emit('editor:record', 'shapeControlPoint stop')
        }
        // if (_t.config.tooltip.shapeControl) {
        //   _t.toolTip.destroy.call(_t)
        // }
        _t.shapeControlPoint.originNodeModel = null
        _t.shapeControlPoint.isMoving = false
        _t.info = null
      }
    },

    // 鼠标点击显示控制锚点 end

    // 拖拽节点到画布 移动虚影 和 创建节点 的所用到的事件 start
    onEditorAddNode (node) {
      const _t = this
      // console.log('onEditorAddNode')
      // 初始化数据
      _t.info = {
        type: 'dragNode',
        node: node,
        target: null
      }
      _t.dragNode.status = 'dragNodeToEditor'
    },
    // 松手了 调用 createNode 先创建节点 
    onMouseup (event) {
      const _t = this
      if (_t.info) {
        if (_t.info.type) {
          if (_t.info.type === 'dragNode' && _t.dragNode.status === 'dragNodeToEditor') {
            _t[_t.info.type].createNode.call(_t, event)
          }
          if (_t[_t.info.type].stop) {
            _t[_t.info.type].stop.call(_t, event)
          }
        }
      }
    },
    onCanvasMouseup (event) {
      // console.log('我在画布上松手了')
      const _t = this
      // console.log('onCanvasMouseup', _t.info.type)
      if (_t.info && _t.info.type && _t[_t.info.type].stop) {
        _t[_t.info.type].stop.call(_t, event)
      }
    },
    // 鼠标进入画布 双肩一个 节点 这个就是 你的拖拽的虚影
    onCanvasMouseenter (event) {
      const _t = this
      if (_t.info && _t.info.type === 'dragNode') {
        _t[_t.info.type].createDottedNode.call(_t, event)
      }
    },
    onCanvasMousemove (event) {
      // console.log('onCanvasMousemove')
      const _t = this
      utils.common.throttle(function () {
        if (_t.info && _t.info.type && _t[_t.info.type].move) {
          // console.log('onCanvasMousemove', _t.info.type)
          _t[_t.info.type].move.call(_t, event)
        }
      }, TIME_FRAME)()
    },
    // 移动的时候 就是移动我们上面的那个虚影子 这里面应该做了防抖
    onMousemove (event) {
      const _t = this
      // console.log('onMousemove', _t.info)
      utils.common.throttle(function () {
        if (_t.info && _t.info.type && _t[_t.info.type].move) {
          _t[_t.info.type].move.call(_t, event)
        }
      }, TIME_FRAME)()
    },

    // 拖拽节点
    dragNode: {
      dottedNode: null,
      status: null,
      // 虚线框节点样式
      dottedNodeStyle: {
        ...config.dottedNode.style.default
      },
      // 创建虚影文件
      createDottedNode (event) {
        const _t = this
        if (!_t.dragNode.dottedNode && _t.info.node) {
          const { width, height } = _t.info.node
          const group = _t.graph.get('group')
          _t.dragNode.dottedNode = group.addShape('rect', {
            name: 'dottedNode',
            attrs: {
              ..._t.dragNode.dottedNodeStyle,
              width,
              height,
              x: event.x - width / 2,
              y: event.y - height / 2
            }
          })
          // _t.graph.paint()
          // if (_t.config.tooltip.dragNode) {
          //   _t.toolTip.create.call(_t, {
          //     left: event.canvasX,
          //     top: event.canvasY + height / 2
          //   }, `X: ${event.x.toFixed(2)} Y: ${event.y.toFixed(2)}<br>W: ${width.toFixed(2)} H: ${height.toFixed(2)}`)
          // }
        }
      },
      createNode (event) {
        console.log('调用创建节点方法');
        const _t = this
        if (_t.dragNode.dottedNode && _t.info.node) {
          console.log('进入创建节点');
          const { width, height, minWidth, minHeight, label, type } = _t.info.node

          const node = {
            ..._t.info.node,
            id: G6Util.uniqueId(),
            name: 'XFC_NODE_' + utils.common.firstUpperCase(type),
            draggable: true,
            x: event.x,
            y: event.y,
            size: [width, height],
            minWidth: minWidth,
            minHeight: minHeight,
            label: label,
            style: {
              fill: _t.graph.$D.fill,
              fillOpacity: _t.graph.$D.fillOpacity,
              stroke: _t.graph.$D.lineColor,
              strokeOpacity: _t.graph.$D.strokeOpacity,
              lineWidth: _t.graph.$D.lineWidth,
              ...config.edge.type[_t.graph.$D.lineDash]
            }
          }
          _t.graph.addItem('node', node)
        }
      },
      start (event) {
        // const _t = this
        // // _t.dragNode.createDottedNode.call(_t, event)
        // if (_t.config.tooltip.dragNode) {
        //   const { width, height } = _t.info.node.getModel()
        //   _t.toolTip.create.call(_t, {
        //     left: event.canvasX,
        //     top: event.canvasY + height / 2
        //   }, `X: ${event.x.toFixed(2)} Y: ${event.y.toFixed(2)}<br>W: ${width.toFixed(2)} H: ${height.toFixed(2)}`)
        // }
        // _t.dragNode.status = 'dragNode'
        // if (_t.config.alignLine.enable) {
        //   // 绘制对齐线
        //   _t.alignLine.start.call(_t)
        // }
      },
      // start (event) {
      //   const _t = this
      //   // _t.dragNode.createDottedNode.call(_t, event)
      //   if (_t.config.tooltip.dragNode) {
      //     const { width, height } = _t.info.node.getModel()
      //     _t.toolTip.create.call(_t, {
      //       left: event.canvasX,
      //       top: event.canvasY + height / 2
      //     }, `X: ${event.x.toFixed(2)} Y: ${event.y.toFixed(2)}<br>W: ${width.toFixed(2)} H: ${height.toFixed(2)}`)
      //   }
      //   _t.dragNode.status = 'dragNode'
      //   if (_t.config.alignLine.enable) {
      //     // 绘制对齐线
      //     _t.alignLine.start.call(_t)
      //   }
      // },
      // 移动 鼠标进入画布的时候创建的虚影子
      move (event) {
        const _t = this
        if (_t.dragNode.status === 'dragNodeToEditor') {
          if (_t.dragNode.dottedNode && _t.info.node) {
            const { width, height } = _t.info.node
            _t.dragNode.dottedNode.attr({
              x: event.x - width / 2,
              y: event.y - height / 2
            })
            // _t.graph.paint()
            // if (_t.config.tooltip.dragNode) {
            //   _t.toolTip.update.call(_t, {
            //     left: event.canvasX,
            //     top: event.canvasY + height / 2
            //   }, `X: ${event.x.toFixed(2)} Y: ${event.y.toFixed(2)}<br>W: ${width.toFixed(2)} H: ${height.toFixed(2)}`)
            // }
            // if (_t.config.alignLine.enable) {
            //   // 绘制对齐线
            //   _t.alignLine.move.call(_t, _t.dragNode.dottedNode)
            // }
          }
        } else if (_t.dragNode.status === 'dragNode') {
          if (_t.info.node) {
            const { id, groupId, x, y } = _t.info.node.getModel()
            _t.graph.find('node', node => {
              const model = node.getModel()
              // 更新当节点
              if (model.id === id) {
                const attrs = {
                  // 处理点击移动 图形时的抖动
                  x: x + event.originalEvent.movementX,
                  y: y + event.originalEvent.movementY
                }
                // 更新节点
                _t.graph.updateItem(_t.info.node, attrs)
                if (_t.config.dragNode.updateEdge) {
                  // 更新边
                  utils.edge.update(_t.info.node, _t.graph)
                }
                if (_t.config.tooltip.dragNode) {
                  const { width, height } = _t.info.node.getModel()
                  _t.toolTip.update.call(_t, {
                    left: event.canvasX,
                    top: event.canvasY + height / 2
                  }, `X: ${event.x.toFixed(2)} Y: ${event.y.toFixed(2)}<br>W: ${width.toFixed(2)} H: ${height.toFixed(2)}`)
                }
              } else {
                if (groupId && model.groupId && model.groupId === groupId) {
                  // 更新同组节点
                  _t.graph.updateItem(node, {
                    x: model.x + event.originalEvent.movementX,
                    y: model.y + event.originalEvent.movementY
                  })
                }
              }
            })
            if (_t.config.alignLine.enable) {
              // 绘制对齐线
              _t.alignLine.move.call(_t, _t.info.node)
            }
          }
        }
      },
      stop (event) {
        const _t = this
        // 记录操作日志
        _t.graph.emit('editor:record', 'dragNode stop')
        _t.dragNode.clear.call(_t)
        // if (_t.config.tooltip.dragNode) {
        //   _t.toolTip.destroy.call(_t)
        // }
        // if (_t.config.alignLine.enable) {
        //   _t.alignLine.stop.call(_t)
        // }
        // _t.graph.paint()
      },
      clear () {
        const _t = this
        if (_t.dragNode.dottedNode) {
          _t.dragNode.dottedNode.remove()
          _t.dragNode.dottedNode = null
        }
        _t.dragNode.status = null
        _t.info = null
      }
    },
    // 拖拽节点到画布 移动虚影 和 创建节点 的所用到的事件 end
  }
}
