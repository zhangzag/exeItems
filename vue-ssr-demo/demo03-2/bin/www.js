const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const path = require('path');
const fs = require('fs');
const app = new Koa()
const router = new Router()
const createBundleRenderer = require('vue-server-renderer').createBundleRenderer

// 服务端执行vue操作
const bundle = fs.readFileSync(path.resolve(__dirname, '../dist/server.bundle.js'), 'utf-8');
// 客户端激活
const template = fs.readFileSync(path.resolve(__dirname, '../dist/index.template.html'), 'utf-8')
const renderer = createBundleRenderer(bundle, {
  template
})

// 资源文件
app.use(static(path.resolve(__dirname, '../dist')));

router.get('/', (ctx, next) => {
  // 服务端渲染结果转换成字符串
  renderer.renderToString((err, html) => {
    if (err) {
      console.error(err);
      ctx.status = 500;
      ctx.body = '服务器内部错误';
    } else {
      ctx.status = 200;
      ctx.body = html; // 将html字符串传到浏览器渲染
    }
  });
});

// 开启路由
app
  .use(router.routes())
  .use(router.allowedMethods());

// 应用监听端口
app.listen(3002, () => {
  console.log('服务器端渲染地址： http://localhost:3002');
});