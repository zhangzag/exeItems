import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'

// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
export function createdApp () {
  // 创建 router 实例
  const router = createRouter()

  const app = new Vue({
    // 根实例简单的渲染应用程序组件。
    render: h => h(App),
    // 注入 router 到根 Vue 实例
    router,
  })

  return { app, router }
}