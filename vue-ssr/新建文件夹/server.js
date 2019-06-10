// const Vue = require('vue')
const server = require('express')()
const createApp = require('./app')
const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./index.html', 'utf-8')
})
// const context = {
//   title: 'hello',
//   meta: `
//     <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no">
//   `
// }

server.get('*', (req, res) => {
  const context = { 
    url: req.url,
    title: '哈哈哈哈',
    meta: `
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no">
    `
  }
  const app = createApp(context)

  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      res.end('error,' + err)
    }
    res.end(html)
  })
})

server.listen(8080)