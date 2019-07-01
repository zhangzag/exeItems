<template>
  <section id="app">
    <p>vue ssr案例第三步 - 服务端渲染（含 vue-router 和 vuex）</p>
    <router-link to="/">首页 首页</router-link>
    <router-link to="/list">列表 列表</router-link>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'App'
}
</script>
