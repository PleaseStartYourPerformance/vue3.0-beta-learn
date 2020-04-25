<template>
  <div id="app">
      <setUp v-if="false" msg="我是从父组件APP传下来的msg"/>
      <computed v-if="false"  />
      <watch v-if="false"  />
      <LifeCycle v-if="false"  />
      <ref v-if="false" />
      <hooks v-if="false"/>
      <provide v-if="true"/>
  </div>
</template>

<script>
import setUp from './components/setUp.vue'
import computed from './components/computed.vue'
import watch from './components/watch.vue'
import LifeCycle from './components/LifeCycle.vue'
import ref from './components/ref.vue'
import hooks from './components/hooks'
import provide from './components/provide.vue'
export default {
  name: 'App',
  components: {
      setUp,
      computed,
      watch,
      LifeCycle,
      ref,
      hooks,
      provide
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
