<template lang="html">
  <div id="home">
    <Home_banner :a="homeData"></Home_banner>
    <Home-content :msg="homeData"></Home-content>

  </div>

</template>

<script>
<<<<<<< HEAD

import HomeContent from './homeComponents/home_content'
export default {

=======
import Home_banner from './homeComponents/home_banner.vue'
import HomeContent from './homeComponents/home_content';
export default{
>>>>>>> 97f2caf2add79a0416bfbf4f96911c7178238ca7
  data(){
    return {
      homeData:{}
    }
  },
  created(){
    this.$http.jsonp('http://mce.mogucdn.com/jsonp/multiget/3?pids=51822%2C51827%2C41119%2C51833%2C51836%2C4604').then(response=>{
      this.homeData=response.data.data;
      console.log(this.homeData[51822]);
    })
  },
  components:{
    HomeContent,
    Home_banner
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
