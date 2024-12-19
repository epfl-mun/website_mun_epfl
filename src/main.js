import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FontAwesomeIcon from './font-awesome'
import VueLazyload from 'vue3-lazyload'
import i18n from './i18n'; // Import the i18n instance
import './assets/tailwind.css'


const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(i18n); // Use the i18n instance
app.use(VueLazyload, {
    preLoad: 1.3,
    error: 'path/to/error.png', // Path to error image
    // loading: '/pictures/rickroll-roll.gif', // Path to loading image
    attempt: 1
  })
app.mount('#app')