import { computed, defineComponent, ref } from "vue";
import wHandler  from "./wHandler.jsx";
import styles from "@/styles/whandler.module.scss";
import wcradscss from "@/styles/wcrad.module.scss";
export default defineComponent({
  name:'wCard',
  components:{
    wHandler,
  },
  props:{
    // 宽度
    width: {
      type: Number,
      default: 300
    },
    // 显示位置
    placement: {
      type: String,
      default: 'right'
    },
     // handler 模式
    mode: {
      type: String,
      validator (value) {
        return ['horizontal', 'vertical'].includes(value)
      },
      default: 'vertical'
    },
    position: {
      type: String,
      validator (value) {
        return ['top', 'right', 'bottom', 'left'].includes(value)
      },
      default: 'right'
    },
    title: String
  },
  setup(props,{slots}){
    const {placement,width,mode,position,title} = props
    const slotNamed = slots.header
    const slotDefault = slots.default 
    const isExpand = ref(true)
    const baseStyle = {
      position:'absolute',
      top:0,
      bottom:0,
      width:width+'px', 
      background:'#fff',
      'box-shadow': '0 0 2px 2px rgba(0, 0, 0, .1)',
      'z-index':200,
      transition: 'all 0.5s ease-in-out'
    }
    
    const vertical = {
      ...baseStyle
    }
    const horizontal = {
      ...baseStyle,
      width:width + '%',
      height:'40px',
      background:'#fff',
      zIndex:201
    }
     
    const cardStyle = computed(() => {
      let style =  mode === 'vertical' ?  vertical: horizontal
      return style
     
    })
    const placementStyle = computed(() => {
     let style1 = {}
     isExpand.value?style1[placement] = 0 : mode === 'vertical'? style1[placement] = -width +'px': style1[placement] = -40 +'px'
     return style1
      
    })
    const toggleHandler = () => {
      isExpand.value = !isExpand.value      
    }
    return () => <div style={[cardStyle.value,placementStyle.value]} >
                    <w-handler callback={toggleHandler} expand={isExpand.value} class={styles['handler']} mode={mode} position={position}></w-handler>
                    <div class={wcradscss["card-header"]}>
                      <div class={wcradscss['title']}>
                        {slotNamed?slotNamed(): title}
                      </div>
                    </div>
                    <div class={wcradscss['card-body']}>
                      {slotDefault && slotDefault()}
                    </div>
                 </div>
    
  }
})