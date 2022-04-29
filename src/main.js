import Vue from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import InputNumber from 'primevue/inputnumber'

Vue.use(PrimeVue)
Vue.component('InputNumber', InputNumber)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
