<template lang="html">
  <div id="nav">
    <div class="nav_warpper">
      <router-link to="/home" v-for="item in navData">
        <div class="img_warpper">
          <img :src="item.image" alt="" >
        </div>
        <div class="nav_content">{{item.title}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      navData:[]
    }
  },
  created(){
    this.$http.jsonp('http://mce.mogucdn.com/jsonp/multiget/3?pids=51822%2C51827%2C41119%2C51833%2C51836%2C4604').then(response=>{
      console.log(response.data.data[4604].list);
      this.navData=response.data.data[4604].list;
    })
  }
}
</script>

<style lang="css">
  #nav{
    height:1.96rem;
    font-size:.48rem;
    color:#999;
    background-color:#fff;
    width:100%;
    box-sizing: border-box;

    position: fixed;
    bottom:-0.02rem;
  }
  .nav_warpper{
    width:100%;
    border-top:1px solid #E5E5E5;
  }
  .nav_warpper:after{
    content:"";
    display: block;
    clear: both;
    height:0;
  }
  .nav_warpper>a{
    width:25%;
    float: left;
    height:100%;
    text-decoration: none;
  }
  .img_warpper{
    width:.98rem;
    height:.92rem;
    overflow: hidden;
    margin:0.1rem auto 0;
  }

  .nav_warpper img{
    width:90%;
    position:relative;
    top:10%;
    margin-left: 5%;
    display: block;
    vertical-align: middle;
  }
  .nav_content{
    color:#FF5777;
    margin-top: 5%;
    text-align: center;
    font-size:.48rem;
  }
</style>
