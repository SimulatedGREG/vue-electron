export default {
  install (Vue) {
    Vue.prototype.$electron = require('electron')
  }
}
