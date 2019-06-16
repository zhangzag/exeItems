// Node.js 服务器是一个长期运行的进程。当我们的代码进入该进程时，它将进行一次取值并留存在内存中。这意味着如果创建一个单例对象，它将在每个传入的请求之间共享。

// 每个请求创建一个新的根 Vue 实例。这与每个用户在自己的浏览器中使用新应用程序的实例类似。如果我们在多个请求之间使用一个共享的实例，很容易导致交叉请求状态污染
import Vue from 'vue';
import createStore from './store/index.js';
import createRouter from './router/';
// import { sync } from 'vuex-router-sync'
import App from './App.vue';

export function createApp() {
  const store = createStore();
  const router = createRouter();
  
  // 同步路由状态(route state)到 store
  // sync(store, router)

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  return { app, store, router, App };
}