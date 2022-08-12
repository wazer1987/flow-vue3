import { computed, defineComponent } from "vue";
import wNodeElementStyle from "@/styles/wNodeElement.module.scss";
import emitter  from '@/utils/index.js'
export default defineComponent({
  name: 'NodeElement',
  props: {
    title: {
      type: String,
      required: true
    },
    info: {
      type: Object,
      required: true,
      default () {
        return {
          type: 'circle',
          label: 'circle',
          enable: true,
          width: 40,
          height: 40,
          anchorPoints: [[0, 0], [0, 1], [1, 0], [1, 1]],
          svg: ``
        }
      }
    },
    width: {
      type: Number,
      default: 40
    },
    height: {
      type: Number,
      default: 40
    }
  },
  setup (props,{emit}) {
    const {title,width,height,info} = props
    
    const elementStyle = computed(() => {
        let style1 = {}
        style1['width'] = width + 'px'
        style1['height'] = height + 'px'
        return style1
    })

    // 鼠标按下
    const handleMouseDown = () => {
      emitter.emit('editor/add/node',info)
    }
    return () =>
      <div  class={wNodeElementStyle['node-element']} style={elementStyle.value}  onMousedown={handleMouseDown}>
        <div class={wNodeElementStyle['content']} title={title}>
          <svg class={wNodeElementStyle['icon']} innerHTML={info.icon}>
            
          </svg>
        </div>
      </div>
  }
})