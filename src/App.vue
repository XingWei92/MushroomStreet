<template>
  <div id="app">
    <HeaderVue></HeaderVue>
    <router-view></router-view>
    <NavVue></NavVue>
    <MineVue></MineVue>
  </div>
</template>

<script>

import HeaderVue from './components/Header.vue'
import NavVue from './components/Nav.vue'
import MineVue from './pages/Mine.vue'
export default {
  name: 'app',
  components:{
    HeaderVue,
    NavVue,
    MineVue
  }
}
</script>

<style>

</style>
