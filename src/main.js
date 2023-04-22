import { createApp } from 'vue'
import Vue from "vue"
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

// STYLE
import "animate.css"
import '@mdi/font/css/materialdesignicons.css'

// TOAST
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
const options = {
    position: 'bottom-right',
};



// Router
import router from "./route/index"

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.use(Toast, options);

app.mount('#app')
