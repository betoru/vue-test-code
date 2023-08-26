//devtool 추가
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
},
this.configureWebpack = {
  devtool: 'eval',
})
