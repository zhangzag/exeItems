const path = require('path');
const merge = require('webpack-merge');
// var HtmlWebpackPlugin  = require('html-webpack-plugin')
const base = require('./webpack.base.config');

module.exports = merge(base, {
  // 这允许 webpack 以 Node 适用方式(Node-appropriate fashion)处理动态导入(dynamic import)，
  // 并且还会在编译 Vue 组件时，
  // 告知 `vue-loader` 输送面向服务器代码(server-oriented code)。
  target: 'node',
  // 对 bundle renderer 提供 source map 支持
  devtool: 'source-map',
  entry: {
    server: path.resolve(__dirname, '../src/entry-server.js')
  },
  output: {
    libraryTarget: 'commonjs2'
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: path.resolve(__dirname, '../src/index.template.html'),
  //     filename: 'index.template.html',
  //     files: {
  //       js: 'client.bundle.js'
  //     },
  //     excludeChunks: ['server']
  //   })
  // ]
})