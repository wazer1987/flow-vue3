import { computed, defineComponent } from "vue";
import styles from "@/styles/whandler.module.scss";
export default defineComponent({
  name: "Hander",
  props: {
    mode: {
      type: String,
      validator(value) {
        return ["horizontal", "vertical"].includes(value);
      },
      default: "vertical",
    },
    position: {
      type: String,
      validator(value) {
        return ["top", "right", "bottom", "left"].includes(value);
      },
      default: "right",
    },
    // 是否展开
    expand: {
      type: Boolean,
      default: true,
    },
    // 回调
    callback: {
      type: Function,
    },
  },
  setup(props) {
    const { mode, position,callback,expand } = props;
    const className = computed(() => {
      return `${styles[mode]} ${styles[position]}`;
    });

    const toggleHandler = () => {
        callback()
    };
    return () => <div class={className.value} onClick={toggleHandler}></div>;
  },
});
