import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import './assets/styles/main.scss'
import './assets/styles/root.css'

createApp(App).use(store).use(router).mount('#app')
