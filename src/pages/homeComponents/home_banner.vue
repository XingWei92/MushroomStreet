<template lang="html">
  <!-- <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" ng-repeat="item in a"><img ng-src="{{item.image_800}}" /></div>
    </div>
    <!-- 如果需要分页器 -->
    <!-- <div class="swiper-pagination"></div>
  </div> -->
</template>

<script>
export default {
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
}
</script>

<style lang="css">
</style>
