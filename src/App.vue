<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Nav></Nav>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
export default {
  name: 'app',
  components:{
    Header,
    Nav
  }
}
</script>

<style>

</style>
