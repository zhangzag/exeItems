const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const base = require('./webpack.base.config');

module.exports = merge(base, {
  // 这允许 webpack 以 Node 适用方式(Node-appropriate fashion)处理动态导入(dynamic import)，
  // 并且还会在编译 Vue 组件时，告知 `vue-loader` 输送面向服务器代码(server-oriented code)。
  target: 'node',
  // source map 支持
  devtool: 'source-map',
  entry: {
    server: path.resolve(__dirname, '../src/entry-server.js')
  },
  externals: [nodeExternals()],
  // 使用 Node 风格导出模块
  output: {
    libraryTarget: 'commonjs2'
  }
})