import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VScrollLock from 'v-scroll-lock'
Vue.use(VScrollLock)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import './css/main.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
