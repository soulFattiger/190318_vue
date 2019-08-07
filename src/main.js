import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import Header from 'components/Header/Header.vue'
import Star from 'components/Star/Star.vue'



import './api'


Vue.config.productionTip = false

Vue.component('Header',Header)
Vue.component('Star',Star)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
