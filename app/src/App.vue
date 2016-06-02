<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <button @click="$electron.log('hi')">Test console.log('hi')</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello vue-electron!'
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
