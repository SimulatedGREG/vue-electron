import Vue from 'vue'
import App from './App.vue'

import VueElectron from '../../index.js'

Vue.use(VueElectron)

new Vue({
  el: 'body',
  components: { App }
})
