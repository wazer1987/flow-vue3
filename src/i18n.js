// 1. 多语言工具包
import { createI18n } from 'vue-i18n'
// 语言包
import messages from './langs/index.js'

 //注册i8n实例并引入语言文件
 const i18n = createI18n({
    legacy: false,
    locale: 'zh-CN',
    messages:messages.data
  })

export default i18n
