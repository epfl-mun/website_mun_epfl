import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FontAwesomeIcon from './font-awesome'
import VueLazyload from 'vue3-lazyload'
import i18n from './i18n'
import { createHead } from '@unhead/vue'
import './assets/tailwind.css'

const app = createApp(App)
const head = createHead()

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(i18n)
app.use(VueLazyload, {
    preLoad: 1.3,
    error: 'path/to/error.png',
    attempt: 1
})
app.use(head)
app.mount('#app')