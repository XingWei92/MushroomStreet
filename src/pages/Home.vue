<template lang="html">
  <div id="home">
    <Home-content></Home-content>
  </div>

</template>

<script>
import HomeContent from './homeComponents/home_content';
export default{
  components:{
    HomeContent
  }
}
</script>

<style lang="css">
  #home{
    font-size:.48rem;
    color:#666;
    box-sizing: border-box;
    background-color:#f6f6f6;
  }
</style>
