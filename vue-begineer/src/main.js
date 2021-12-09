import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import full from '../src/components/full-component'
import MintUi from 'mint-ui';

Vue.config.productionTip = false
Vue.component('full', full)
Vue.use(MintUi);

//創建全局過濾器
Vue.filter('myFilter', function (value) {
  return '我是全局過濾器'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
