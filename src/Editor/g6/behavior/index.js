

// 综合节点控制交互
import nodeControl from './nodeControl.js'
// 预览画布交互
// import previewCanvas from './previewCanvas'

const obj = {
  nodeControl,
  // previewCanvas
}

export default function (G6) {
  console.log('注册事件');
  Object.values(obj).forEach(item => {
    G6.registerBehavior(item.name, item.options)
  })
}
