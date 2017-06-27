<template lang="html">
<<<<<<< HEAD

=======
  <!-- <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" ng-repeat="item in a"><img ng-src="{{item.image_800}}" /></div>
    </div>
    <!-- 如果需要分页器 -->
    <!-- <div class="swiper-pagination"></div>
  </div> -->
>>>>>>> 5712223bbcf4890f8054f512e4d9b6d2290b3963
</template>

<script>
export default {
<<<<<<< HEAD
=======
  props:['a'],
  mounted(){
    var mySwiper = new Swiper ('.swiper-container', {
       direction: 'horizontal',
       loop: true,
       autoplay:3000,
       // 如果需要分页器
       pagination: '.swiper-pagination',
       //启动动态检查器
       observer:true,
       //操作完还能自动轮播
       autoplayDisableOnInteraction:false
     });
   }
>>>>>>> 5712223bbcf4890f8054f512e4d9b6d2290b3963
}
</script>

<style lang="css">
</style>
