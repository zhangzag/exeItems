const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const path = require('path');
const fs = require('fs');
const app = new Koa()
const router = new Router()
const { createBundleRenderer } = require('vue-server-renderer')

// 资源文件
app.use(static(path.resolve(__dirname, '../dist')));

const bundle = path.resolve(__dirname, '../dist/server.bundle.js')
const renderer = createBundleRenderer(bundle, {
  template: fs.readFileSync(path.resolve(__dirname, '../dist/index.template.html'), 'utf-8')
})

router.get('*', (ctx, next) => {
  let context = {
    url: ctx.url
  };

  // renderer.renderToStream(context, (err, html) => {
  //   if (err) {
  //     console.error(err);
  //     ctx.status = 500;
  //     ctx.body = '服务器内部错误, ' + JSON.stringify(err);
  //   } else {
  //     console.log(html);
  //     // console.log(11111, context)
  //     ctx.status = 200;
  //     ctx.type = 'html';
  //     ctx.body = html;
  //   }
  // });
  const ssrStream = renderer.renderToStream();
  ctx.status = 200;
  ctx.type = 'html';
  ctx.body = ssrStream;
});

app
  .use(router.routes()) /*启动路由*/
  .use(router.allowedMethods());
/*
  * router.allowedMethods()用在了路由匹配 router.routes()之后,所以在当所有路由中间件最后调用.此时根据 ctx.status 设置 response 响应头 
*/

app.listen(3002, () => {
  console.log('demo02 - 渲染地址： http://localhost:3002');
});
