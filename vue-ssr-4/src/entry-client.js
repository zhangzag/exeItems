// 客户端入口只要执行挂载任务
import { createApp } from './app.js';

const { app } = createApp();

app.$mount('#app');