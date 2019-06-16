const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const path = require('path');
const fs = require('fs');
const app = new Koa()
const router = new Router()
const createBundleRenderer = require('vue-server-renderer').createBundleRenderer

const bundle = fs.readFileSync(path.resolve(__dirname, '../dist/server.bundle.js'), 'utf-8');
const renderer = createBundleRenderer(bundle, {
  template: fs.readFileSync(path.resolve(__dirname, '../dist/index.template.html'), 'utf-8')
})

// 资源文件
app.use(static(path.resolve(__dirname, '../dist')));

console.log(111111)
router.get('/', (ctx, next) => {
  console.log(222, renderer)
  // 这里用 renderToString 的 promise 返回的 html 有问题，没有样式
  renderer.renderToString((err, html) => {
    if (err) {
      console.error(err);
      ctx.status = 500;
      ctx.body = '服务器内部错误';
    } else {
      console.log(html);
      ctx.status = 200;
      ctx.body = html;
    }
  });
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3002, () => {
  console.log('服务器端渲染地址： http://localhost:3002');
});