import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createVuetify } from 'vuetify'

import 'vuetify/dist/vuetify.min.css'

const vuetify = createVuetify()

createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
  .mount('#app')

