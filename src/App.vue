<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <WatchTest msg="Do Watch TEST!"/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import WatchTest from './components/WatchTest.vue'

export default {
  name: 'App',
  components: {
    WatchTest
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
