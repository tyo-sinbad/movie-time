import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//ELEMENT PLUS
import 'element-plus/dist/index.css'

import './styles/tailwind/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
