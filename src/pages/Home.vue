<template lang="html">
  <div id="home">
    <Home-lazylist :Lmsg="lazyListData"></Home-lazylist>
    <Home-sales :SalesMsg="salesData"></Home-sales>
    <Home-content :msg="homeData"></Home-content>
    <Home-hot :hotMsg="hotData"></Home-hot>
    <!-- 填充 -->
    <div class="home_fill"></div>
  </div>

</template>

<script>
import HomeContent from './homeComponents/home_content';
import HomeLazylist from './homeComponents/home_lazyList';
import HomeSales from './homeComponents/home_sales';
import HomeHot from './homeComponents/home_hot';
import HomeBanner from './homeComponents/home_banner'
export default{
  data(){
    return {
      homeData:[],
      lazyListData:[],
      salesData:[],
      hotData:[],
      bannerData:[]
    }
  },
  created(){
    this.$http.jsonp('http://mce.mogucdn.com/jsonp/multiget/3?pids=51822%2C51827%2C41119%2C51833%2C51836%2C4604').then(response=>{
      console.log(1);
      this.homeData=response.data.data[51833].list;
      this.lazyListData=response.data.data[51827].list;
      this.salesData=response.data.data[41119].list[0];
      this.hotData=response.data.data[51836].list;
      this.bannerData=response.data.data[51822].list;
      //console.log(this.bannerData);
    })
  },
  components:{
    HomeContent,
    HomeLazylist,
    HomeSales,
    HomeHot,
    HomeBanner,
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
