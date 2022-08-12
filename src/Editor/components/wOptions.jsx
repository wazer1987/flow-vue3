import { defineComponent, watch, ref, computed, reactive } from "vue";
import styles from "@/styles/wOptions.module.scss";
import wCardItem from "./wCardItem.jsx";
import { useI18n } from "vue-i18n";
import emitter from '@/utils/index.js'
export default defineComponent({
  name: 'Options',
  props: {
    editorConfig: Object,
    toolList: Array,
    currentItem: Array,
  },
  components:{
    wCardItem
  },
  setup (props) {
    const firstItem = ref(null)
    const defaultValue = {
      fill: '#000000',
      shadowColor: '#999999',
      shadowBlur: 5,
      shadowOffsetX: 5,
      shadowOffsetY: 5,
      textAlign: 'center',
      textBaseline: 'middle',
      fontWeight: 400,
      fontSize: 16
    }
    const state = reactive({
      formData: {
        labelStyle: {}
      }
    })
    const { t } = useI18n()
    const handleChange = (val, form) => {
      let model = {
          style: state.formData.style,
          label: state.formData.label,
          labelCfg: {
            ...state.formData.labelCfg,
            style: state.formData.labelStyle
          }
      }
      if(isNode.value) {
        model = {
          ...model,
          ...state.formData.attrs,
          size:[state.formData.attrs.width,state.formData.attrs.height]
        }
      }
      let currentItemArr = props.currentItem
      if(firstItem.value){
        currentItemArr[0] = {
          ...firstItem.value,
          model
        }
      }
      emitter.emit('editor/currentItem/update',currentItemArr)
   }
    const isNode = computed(() =>{
      return firstItem.value && firstItem.value.type === 'node'
    })
    console.log(isNode.value,'====computed');
    const isEdge = computed(() => firstItem.value && firstItem.value.type === 'edge')
    watch(() => props.currentItem, (val) => {
      firstItem.value = val[0]
      console.log(firstItem.value.type);
      console.log(isNode.value);
      if (firstItem) {
        const model = JSON.parse(JSON.stringify(firstItem.value.model))
        const { labelCfg } = model
        let formData = {}
        // 如果你是node 节点
        if (isNode) {
          const { x, y, width, height, style, label } = model
          // 元素属性
          formData.attrs = {
            x,
            y,
            width,
            height
          }
          // 元素样式
          formData.style = {
            fill: style.fill,
            stroke: style.stroke,
            lineWidth: style.lineWidth,
            lineDash: style.lineDash,
            shadowColor: style.shadowColor || defaultValue.shadowColor,
            shadowBlur: style.shadowBlur || defaultValue.shadowBlur,
            shadowOffsetX: style.shadowOffsetX || defaultValue.shadowOffsetX,
            shadowOffsetY: style.shadowOffsetY || defaultValue.shadowOffsetY,
            fillOpacity: style.fillOpacity
          }
          // 元素文本
          formData.label = label
          formData.labelCfg = {
            position: labelCfg.position,
            offset: labelCfg.offset
          }
        } else if (isEdge) {
          // 这里是处理边的样式
        }
        state.formData.labelStyle = {
          fill: labelCfg.style.fill || defaultValue.fill,
          stroke: labelCfg.style.stroke,
          lineWidth: labelCfg.style.lineWidth,
          shadowColor: labelCfg.style.shadowColor,
          shadowBlur: labelCfg.style.shadowBlur,
          shadowOffsetX: labelCfg.style.shadowOffsetX,
          shadowOffsetY: labelCfg.style.shadowOffsetY,
          opacity: labelCfg.style.opacity,
          font: labelCfg.style.font,
          textAlign: labelCfg.style.textAlign || defaultValue.textAlign,
          textBaseline: labelCfg.style.textBaseline || defaultValue.textBaseline,
          fontStyle: labelCfg.style.fontStyle,
          fontVariant: labelCfg.style.fontVariant,
          fontWeight: labelCfg.style.fontWeight || defaultValue.fontWeight,
          fontSize: labelCfg.style.fontSize || defaultValue.fontSize,
          fontFamily: labelCfg.style.fontFamily,
          lineHeight: labelCfg.style.lineHeight
        }
        state.formData = formData
      } else {
        state.formData = {}
      }


    })
    return () =>
    (
      <div class={styles.options}>
        {state.formData}
        {isNode.value || isEdge.value ?
          <Form label-position="top">
            {isNode.value ?
              <w-card-item title={t('L10005')} >
                <div class={styles['form-item-block']}>
                  <div class={styles.row}>
                    <FormItem class={styles.col} label="X">
                      <InputNumber  v-model={state.formData.attrs.x} class={styles['input-number']} size="small" onChange={(val) => handleChange(val, 'x')}></InputNumber>
                    </FormItem>
                    <FormItem class={styles.col} label="Y">
                      <InputNumber  v-model={state.formData.attrs.y} class={styles['input-number']} size="small" onChange={(val) => handleChange(val, 'Y')}></InputNumber>
                    </FormItem>
                  </div>
                  <div class={styles.row} >
                    <FormItem lass={styles.col} label="Width">
                      <InputNumber  v-model={state.formData.attrs.width} class={styles['input-number']} size="small" onChange={(val) => handleChange(val, 'width')}></InputNumber>
                    </FormItem>
                    <FormItem lass={styles.col} label="Height">
                      <InputNumber  v-model={state.formData.attrs.height} class={styles['input-number']} size="small" onChange={(val) => handleChange(val, 'height')}></InputNumber>
                    </FormItem>
                  </div>
                </div>
                
              </w-card-item>
              :
              ''}

          </Form>
          :
          ''
        }
      </div>
    )
  }
})