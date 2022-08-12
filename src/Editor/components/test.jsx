import { defineComponent } from "vue";

export default defineComponent({
  setup(props,{slots}){
    const render = () => {
      return 
    }
    return () => (
      <div style="position: fixed;top: 200px;left: 200px;z-index: 999;">
      <div>我是test</div>
      <div>
        {slots.default()}
      </div>
    </div>
    )
  }
})