const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/DroughtHub/'   // 一定要跟 repo 名稱一模一樣
    : '/'
})
