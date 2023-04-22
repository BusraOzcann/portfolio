import { createApp } from 'vue'
import App from './App.vue'

//bootstrap
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
    components,
    directives,
})

import "animate.css"

import '@mdi/font/css/materialdesignicons.css'


// Router
import router from "./route/index"

createApp(App).use(router).use(vuetify).mount('#app')
