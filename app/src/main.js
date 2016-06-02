import Vue from 'vue'
import App from './App.vue'

import VueElectron from '../../index.js'

Vue.use(VueElectron)

window.app = new Vue({
  el: 'body',
  components: { App }
})
