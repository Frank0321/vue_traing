import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import full from '../src/components/full-component'

Vue.config.productionTip = false
Vue.component('full', full)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
