
import general from './genernal/index.js'
const obj = {
  ...general,
}
export default function (G6) {
  Object.values(obj).forEach(item => {
    G6.registerNode(item.name, item.options, item.extendName)
  })
}