<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <setUp/>
  </div>
</template>

<script>
import setUp from './components/setUp.vue'

export default {
  name: 'App',
  components: {
    setUp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
