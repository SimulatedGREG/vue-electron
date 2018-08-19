const electron = require('electron')

module.exports = {
  install: function (Vue) {
    Object.defineProperties(Vue.prototype, {
      $electron: {
        get () {
          return electron
        },
      },
    })
  },
}
