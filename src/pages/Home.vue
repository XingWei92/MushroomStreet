<template lang="html">
  <div id="home">
    <Home-content :msg="homeData"></Home-content>

  </div>

</template>

<script>
import HomeContent from './homeComponents/home_content';
export default{
  data(){
    return {
      homeData:{}
      // lazyListData:[],
      // rushData:[],
      // timeData:{},
      // salesData:[],
      // listData:[]
    }
  },
  created(){
    this.$http.jsonp('http://mce.mogucdn.com/jsonp/multiget/3?pids=51822%2C51827%2C41119%2C51833%2C51836%2C4604').then(response=>{
      console.log(1);
      //console.log(response.data.data[51827].list);
      this.homeData=response.data.data;
      console.log(this.homeData);
      // this.lazyListData=response.data.data[51827].list;
      // this.rushData=response.data.data[41119].list[0].list;
      //console.log(response.data.data[41119].list[0]);
      // this.timeData=response.data.data[41119].list[0]
      //console.log(this.timeData);
      //console.log(response.data.data[51833].list);
      // this.salesData=response.data.data[51833].list;
      //console.log(this.rushData);
      // console.log(response.data.data[51836].list);
      // this.listData=response.data.data[51836].list
    })
  },
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
