import { computed, defineComponent, ref } from "vue";
import styles from "@/styles/wCardItem.module.scss";
export default defineComponent({
  name:'wCardItem',
  props:{
    title: String,
    // 支持折叠
    enableFold: {
      type: Boolean,
      default: false
    },
    // 默认是否折叠
    fold: {
      type: Boolean,
      default: false
    },
    // 标题加粗
    bold: {
      type: Boolean,
      default: false
    }
  },
  setup(props,{slots}) {
    const slotDefault = slots.default 
    const {title,fold} = props
    const isFold = ref(true)

    const handleToggle = () => {
      isFold.value = !isFold.value
    }
    return () => 
    <div class={styles['card-item']}>
      <div class={styles.header} onClick={handleToggle}>
        <div>
            {title}
        </div>
        <div class={styles.handler}>
          {isFold.value?<i>▴</i>:<i>▾</i>}                       
        </div>
      </div>
      {
        isFold.value?<div class={styles.body}>{slotDefault && slotDefault()}</div>:''
      }
      
    </div>
  }
})