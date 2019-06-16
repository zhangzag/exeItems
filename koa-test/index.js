var Koa = require('koa')
var Router = require('koa-router')
var app = new Koa()
var router = new Router()
var Vue = require('vue')

var vm = new Vue({
  el: '#app',
  data: {
    num: 1
  },
  template: '<div id="app">哈哈哈哈哈-{{num}}</div>'
})
console.log(111111111)

router.get('*', (ctx, next) => {
  console.log('vm - start: ', vm.num)
  let a = 1

  ctx.status = 200;
  ctx.type = 'html';
  ctx.body = vm.num + "---" + a;

  vm.num = vm.num + 1
  a = a + 1
  console.log('vm - end: ', vm.num)
})
app
  .use(router.routes())
  .use(router.allowedMethods)


app.listen(3001, () => {
  console.log('测试路径： http://localhost:3001')
})