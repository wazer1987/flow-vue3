import {
  Menu,
  MenuItem,
  Tooltip,
  Divider,
  InputNumber,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Icon,
  Message,
  Modal,
  Input,
  Form,
  FormItem,
  Slider,
  Select,
  Option,
  Button,
  Table
} from 'view-ui-plus'
const obj = {
  // ui组件
  Menu,
  MenuItem,
  Tooltip,
  Divider,
  InputNumber,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Icon,
  Message,
  Modal,
  Input,
  Form,
  FormItem,
  Slider,
  Select,
  Option,
  Button,
  Table,
  // // 颜色选择器
  // SketchPicker: Sketch,
  // // 自定义组件
  // XIcon,
  // XTooltip,
  // XDivider,
  // XColorPicker,
  // XNoData
}
const components = {}
components.install = function (Vue, options) {
  for (const name in obj) {
    if (name && obj[name]) {
      Vue.component(name, obj[name])
      // if (['Message', 'Modal'].includes(name)) {
      //   Vue.prototype[`$${name}`] = obj[name]
      // }
    }
  }
}

export default components