<template lang="html">
  <div id="nav">
    <div class="nav_warpper">
<<<<<<< HEAD
      <router-link to="/home">
        <div class="nav_home_img img_warpper">
          <img src="../assets/images/home_nav_home1.png" alt="">
        </div>
        <div class="nav_content">首页</div>
      </router-link>
      <router-link to="/classify">
        <div class="nav_classfy_img img_warpper">
            <img src="../assets/images/home_nav_classfy.png" alt="">
        </div>
        <div class="nav_content">分类</div>
      </router-link>
      <router-link to="/cart">
        <div class="nav_cart_img img_warpper">
            <img src="../assets/images/home_nav_cart.png" alt="">
        </div>
        <div class="nav_content">购物车</div>
      </router-link>
      <router-link to="/mine">
        <div class="nav_mine_img img_warpper">
            <img src="../assets/images/home_nav_mine.png" alt="">
        </div>
        <div class="nav_content">我的</div>
      </router-link>
=======
        <router-link :to="item.navRouterName" v-for="item in navData" >
          <div class="img_warpper">
            <img :src="item.image" alt="" >
          </div>
          <div class="nav_content">{{item.title}}</div>
        </router-link>
>>>>>>> 7a5497f1e9e1ada84423277c19566ef25f5bfa7b
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      navData:[],
      RuterName:['/home','/classify','/cart','/mine']
    }
  },
  created(){
    this.$http.jsonp('http://mce.mogucdn.com/jsonp/multiget/3?pids=51822%2C51827%2C41119%2C51833%2C51836%2C4604').then(response=>{
      //console.log(response.data.data[4604].list);
      this.navData=response.data.data[4604].list;
      this.navData.map((item,index)=>{
        item.navRouterName=this.RuterName[index];
      })
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
<<<<<<< HEAD
=======
    color:#666;
>>>>>>> 7a5497f1e9e1ada84423277c19566ef25f5bfa7b
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
<<<<<<< HEAD
=======
    color: #666;
>>>>>>> 7a5497f1e9e1ada84423277c19566ef25f5bfa7b
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
<<<<<<< HEAD
    /*top:50%;*/
=======
    top:10%;
>>>>>>> 7a5497f1e9e1ada84423277c19566ef25f5bfa7b
    margin-left: 5%;
    display: block;
    vertical-align: middle;
  }
  .nav_content{
<<<<<<< HEAD
    color:#FF5777;
    text-align: center;
    font-size:.48rem;
=======
    margin-top: 5%;
    text-align: center;
    font-size:.48rem;
  }
  .nav_warpper>.router-link-exact-active{
    color: #ff5777;
  }
  .router-link-active{

>>>>>>> 7a5497f1e9e1ada84423277c19566ef25f5bfa7b
  }
</style>
