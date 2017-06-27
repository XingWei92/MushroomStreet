<template>
  <div id="app">
    <HeaderVue></HeaderVue>
    <router-view></router-view>
    <NavVue></NavVue>
  </div>
</template>

<script>

import HeaderVue from './components/Header.vue'
import NavVue from './components/Nav.vue'
export default {
  name: 'app',
  components:{
    HeaderVue,
    NavVue,
  }
}
</script>

<style>

</style>
