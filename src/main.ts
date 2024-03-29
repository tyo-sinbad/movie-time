import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'typeface-montserrat'

import App from './App.vue'
import router from './router'

//ELEMENT PLUS
import 'element-plus/dist/index.css'

import './styles/tailwind/index.css'

import './utils/icon.ts'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'swiper/swiper-bundle.css'
import Swiper from 'swiper'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.config.globalProperties.$swiper = Swiper

app.mount('#app')
