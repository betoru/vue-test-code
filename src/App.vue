<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <TestTest msg="You wanna Test?"/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TestTest from './components/TestTest.vue'

export default {
  name: 'App',
  components: {
    TestTest
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
