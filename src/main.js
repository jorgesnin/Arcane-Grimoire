import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faShieldHalved, faSkull, faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import glow from "./directives/glow"

library.add(faHeart, faShieldHalved, faSkull, faBook)

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

app.component("font-awesome-icon", FontAwesomeIcon)
app.directive("glow", glow)

app.mount("#app")