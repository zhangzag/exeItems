<template>
  <div id="app">
    <!-- <a href="/bar">bar</a>
    <a href="/home">home</a> -->
    <home></home>
    <bar></bar>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Bar from './components/Bar.vue'

export default {
  name: 'app',
  components: {
    Home, Bar
  }
}
</script>

