import apis from './apis'

export default {
  install (Vue, options) {
    Vue.prototype.$electron = { ...apis }
  }
}
