<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>짐은 미륵이니라</p>
  </div>
  <div>
    <input v-model="testModel" />
  </div>
</template>

<script>
export default {
  name: 'TestTest',
  props: {
    msg: String
  },
  data() {
    return {
      testModel:'',
    }
  },
}
</script>

<style scoped>

</style>
