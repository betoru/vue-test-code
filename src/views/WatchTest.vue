<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <p>
      기존 데이터가 변경됐을 때 어떤 처리를 해야 할 경우,
      쉽게 수행할 수 있도록 `watch` 라는 기능을 제공한다.
    </p>
    <a href="https://negabaro.github.io/archive/vuejs-watch">참고 watch 사용법</a><br>
    <a href="https://github.com/vuejs/vue/issues/2164">이슈 발생 토론</a>
    <p>1. 단일 데이터의 변경 감지 테스트</p>
    <div>
      <input v-model="param" placeholder="단일 param"/><br>
    </div>
    <p>2. 복수 및 Object Type Sub 데이터의 변경 감지 테스트</p>  
    <div>
      <input v-model="params.name" placeholder="name"/><br>
      <input v-model="params.age" placeholder="age"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WatchTest',
  props: {
    msg: String
  },
  data() {
    return {
      param:'',
      params:{
        name:'',
        age:'',
      },
    }
  },
  watch: {
    /* watch의 기본기능, param이 변경될 때 마다 아래의 함수가 실행된다. */
    param(newParam, oldParam) {
      console.log("🚀 ~ file: TestTest.vue ~ line 25 ~ param ~ newParam, oldParam", newParam, oldParam)
    },

    /* 위와 같은 방식으로 복수 파라미터의 watch는 동작안함 */
    // params(newParams, oldParams) {
    //   console.log("🚀 ~ file: TestTest.vue ~ line 34 ~ params ~ newParams, oldParams", newParams, oldParams)
    // },

    /*
      object 으로 wrap 된 복수의 파라미터에 대해서 nested 한 값을 watch 하는데 
      vue의 공식문서는 deep 옵션을 제안하고 있음. 
      하지만 new,old 데이터의 차이가 없다. 버그인지는 잘 모르겠음.
    */
    /* params: {
      handler(newParams, oldParams) {
        console.log("🚀 ~ file: TestTest.vue ~ line 34 ~ params ~ newParams, oldParams", newParams.name, oldParams.name);
      },
      deep:true,
    }, */

    /**
     * 위와 같은 경우 computed 를 활용해서 변경 데이터의 차이를 기대할 수 있음.
     * 
     */
    computedParams: {
      handler(newParam, oldParam){
        console.log("🚀 ~ file: TestTest.vue ~ line 61 ~ handler ~ newParam, oldParam", newParam.name, oldParam.name);
      },
      deep:true,
    },
  },
  computed: {
    computedParams: function() {
      return Object.assign({}, this.params);
    }
  },
}
</script>
<style scoped>
</style>
