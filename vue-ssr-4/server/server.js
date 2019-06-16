const Koa = require('koa')
const Router = require('koa-router');
const serve = require('koa-static');
const path = require('path');
const fs = require('fs');
const { createBundleRenderer } = require('vue-server-renderer');
const app = new Koa()
const router = new Router()

app.use(serve(path.resolve(__dirname, '../dist')));

app
  .use(router.routes())
  .use(router.allowedMethods());

  // const bundle = fs.readFileSync(path.resolve(__dirname, '../dist/vue-ssr-server-bundle.json'), 'utf-8')
  // const template = fs.readFileSync(path.resolve(__dirname, '../dist/index.ssr.html'), 'utf-8')
  // const renderer = require('vue-server-renderer').createBundleRenderer(bundle, {
  //   template
  // })
const serverBundle = require(path.resolve(__dirname, '../dist/vue-ssr-server-bundle.json'));
const clientManifest = require(path.resolve(__dirname, '../dist/vue-ssr-client-manifest.json'));
// const template = fs.readFileSync(path.resolve(__dirname, '../dist/index.ssr.html'), 'utf-8');
const template = fs.readFileSync(path.resolve(__dirname, '../dist/index.ssr.html'), 'utf-8');

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template: template,
  clientManifest: clientManifest
});

  // router.get('*', (ctx, next) => {
  //   renderer.renderToString((err, html) => {
  //     if (err) {
  //       console.error(err);
  //       ctx.status = 500;
  //       ctx.body = '服务器内部错误';
  //     } else {
  //       ctx.status = 200;
  //       ctx.body = html;
  //     }
  //   })
  // })
  router.get('*', (ctx, next) => {
    // console.log('ctx', ctx);
    // console.log('url', ctx.url);
  
    let context = {
      url: ctx.url
    };
  console.log(1111)
    const ssrStream = renderer.renderToStream(context);
    ctx.status = 200;
    ctx.type = 'html';
    ctx.body = '123';
  });

  app.listen(3001, () => {
    console.log('端渲染地址： http://localhost:3001')
  })