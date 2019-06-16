const path = require('path');
const merge = require('webpack-merge');
var HtmlWebpackPlugin  = require('html-webpack-plugin')
const base = require('./webpack.base.config');

module.exports = merge(base, {
  target: 'node',
  // 对 bundle renderer 提供 source map 支持
  devtool: 'source-map',
  entry: {
    server: path.resolve(__dirname, '../src/entry-server.js')
  },
  output: {
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.template.html'),
      filename: 'index.template.html',
      files: {
        js: 'client.bundle.js'
      },
      excludeChunks: ['server']
    })
  ]
})