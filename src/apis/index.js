const files = require.context('.', false, /\.js$/)
let apis = {}

files.keys().forEach((key) => {
  if (key === './index.js') return
  apis[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default apis
