<template lang="html">
  <div id="home">
<<<<<<< HEAD
    <Home-lazylist :Lmsg="lazyListData"></Home-lazylist>
    <Home-sales :SalesMsg="salesData"></Home-sales>
=======
    <Home_banner :a="homeData"></Home_banner>
>>>>>>> 5712223bbcf4890f8054f512e4d9b6d2290b3963
    <Home-content :msg="homeData"></Home-content>
    <Home-hot :hotMsg="hotData"></Home-hot>
    <!-- 填充 -->
    <div class="home_fill"></div>
  </div>

</template>

<script>
<<<<<<< HEAD

import HomeContent from './homeComponents/home_content'
export default {

=======
import Home_banner from './homeComponents/home_banner.vue'
import HomeContent from './homeComponents/home_content';
import HomeLazylist from './homeComponents/home_lazyList';
import HomeSales from './homeComponents/home_sales';
import HomeHot from './homeComponents/home_hot';
import HomeBanner from './homeComponents/home_banner'
export default{
>>>>>>> 97f2caf2add79a0416bfbf4f96911c7178238ca7
  data(){
    return {
<<<<<<< HEAD
      homeData:[],
      lazyListData:[],
      salesData:[],
      hotData:[],
      bannerData:[]
=======
      homeData:{}
>>>>>>> 5712223bbcf4890f8054f512e4d9b6d2290b3963
    }
  },
  created(){
    this.$http.jsonp('http://mce.mogucdn.com/jsonp/multiget/3?pids=51822%2C51827%2C41119%2C51833%2C51836%2C4604').then(response=>{
<<<<<<< HEAD
      console.log(1);
      this.homeData=response.data.data[51833].list;
      this.lazyListData=response.data.data[51827].list;
      this.salesData=response.data.data[41119].list[0];
      this.hotData=response.data.data[51836].list;
      this.bannerData=response.data.data[51822].list;
      //console.log(this.bannerData);
=======
      this.homeData=response.data.data;
      console.log(this.homeData[51822]);
>>>>>>> 5712223bbcf4890f8054f512e4d9b6d2290b3963
    })
  },
  components:{
    HomeContent,
<<<<<<< HEAD
    HomeLazylist,
    HomeSales,
    HomeHot,
    HomeBanner,
=======
    Home_banner
>>>>>>> 5712223bbcf4890f8054f512e4d9b6d2290b3963
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
  .home_fill{
    height:1.96rem;
  }
</style>
