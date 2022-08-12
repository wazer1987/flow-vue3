import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import components from './components'

import 'view-ui-plus/dist/styles/viewuiplus.css'
import '@/styles/index.scss'
const app = createApp(App)
app.use(i18n)
app.use(components)
app.mount('#app')
