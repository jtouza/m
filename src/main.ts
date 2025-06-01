import { createApp } from 'vue'
import './assets/scss/main.scss'

import router from './router'
import pinia from "./store/pina"
import {i18n} from "./i18n"

import App from './App.vue'


// if (typeof window !== 'undefined') {
//     const platform = window.navigator.platform.toLowerCase()
//     if (platform.includes('mac') && !document.documentElement.classList.contains('macos')) {
//         document.documentElement.classList.add('macos')
//     }
// }

const app = createApp(App);
app.use(pinia);
app.use(i18n);
app.use(router);
app.mount('#app')
