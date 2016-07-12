# vue-electron
> The vue plugin that wraps [electron](https://github.com/electron/electron) APIs to the Vue object.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

### Need a full boilerplate for creating electron apps built with vue? Make sure to check out electron-vue.
[https://github.com/SimulatedGREG/electron-vue](https://github.com/SimulatedGREG/electron-vue)

## Installing
Install using NPM
```
npm install vue-electron --save
```

Include using webpack or browserify

**main.js**
```js
import Vue from 'vue'
import VueElectron from 'vue-electron'

Vue.use(VueElectron)
```

## Using the plugin
This plugin will attach electron APIs to the Vue object itself, so accessing all APIs is dead simple. All official documentation from electron can be used and accessed from `this.$electron`.

So instead of...
```js
const electron = require('electron')

export default {
  methods: {
    getName () {
      return electron.remote.app.getName()
    }
  }
}
```

Now you can...

```js
export default {
  methods: {
    getName () {
      return this.$electron.remote.app.getName()
    }
  }
}
```

Now you might be thinking, "Is it really that annoying to simply require electron to access it?" Probably not, but it can get cumbersome to have to include it in every component file that needs it. In the end, attaching electron directly to Vue just makes sense.
