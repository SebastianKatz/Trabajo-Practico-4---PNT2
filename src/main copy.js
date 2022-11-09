import Vue from 'vue'
import App from './App.vue'
import { router } from './router'


/* -------------- FORMULARIO AVANZADO --------------- */
//https://www.npmjs.com/package/vue-form
//Instalación: npm i vue-form
import './form'
import './axios'
import './bootstrap'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
