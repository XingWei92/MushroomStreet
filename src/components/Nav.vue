<template lang="html">
  <div id="nav">
    <div class="nav_warpper">
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
    </div>
  </div>
</template>

<script>
export default {
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
    /*top:50%;*/
    margin-left: 5%;
    display: block;
    vertical-align: middle;
  }
  .nav_content{
    color:#FF5777;
    text-align: center;
    font-size:.48rem;
  }
</style>
