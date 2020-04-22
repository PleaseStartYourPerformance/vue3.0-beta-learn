<template>
  <div id="app">
<!--    <setUp msg="我是从父组件APP传下来的msg"/>-->
<!--    <div>setUP组件-结束线</div>-->
<!--    <hr>-->
<!--    <computed/>-->
    <watch></watch>
  </div>
</template>

<script>
// import setUp from './components/setUp.vue'
// import computed from './components/computed.vue'
import watch from './components/watch.vue'
export default {
  name: 'App',
  components: {
    // setUp,
    // computed,
    watch

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
