<template lang="html">
  <div id="classify">
      <Classify-list></Classify-list>

      <router-view></router-view>
  </div>
</template>

<script>
import ClassifyList from './classifyComponents/classify-list.vue'
import ClassifyContent from './classifyComponents/classify-content.vue'

export default {
  components : {
      ClassifyList,
      ClassifyContent
  }
}
</script>

<style lang="css">
</style>
