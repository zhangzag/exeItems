import { createApp } from './app.js';

// 用于创建 vue 实例
export default context => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp();

    console.log('context.url:   ', context.url)
    // console.log('router:   ', router)
    // 路由跳转到浏览器输入的URL
    router.push(context.url);

    // router.onReady(() => {
    //   const matchedComponents = router.getMatchedComponents();
    //   console.log('matchedComponents: ', matchedComponents)
      
    //   // 未匹配到路由
    //   if (!matchedComponents.length) {
    //     return reject({ code: 404, msg: '未找到页面' });
    //   }

    //   resolve(app)
    // }, reject)
    resolve(app)
  });
}