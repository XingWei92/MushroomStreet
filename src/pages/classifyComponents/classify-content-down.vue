<template lang="html">
  <!-- 导航容器 -->
  <div class="content-down-warp">
    <div class="content-down-box">
      <div class="content-box-fix">
        <ul class="content-box-item">
          <li v-for="item in sortFilterData">
            <router-link :to="{ name: 'classifyFilter',path:'/classify/classifyContent/:maitKey/:sortKey', params: {sortKey:item.sortKey} }">
              <span class="in_border">{{item.title+''+item.sortKey}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!--图片容器  -->
    <div class="">
      <router-view></router-view>
    </div>
  </div>


</template>

<script>
import ClassifyContentDetail from './classify-content-detail.vue'

export default {
  data(){
    return{
      sortFilterData:[]
    }
  },
  created(){
    this.$http.jsonp('https://list.mogujie.com/search?cKey=h5-cube&fcid=10062603&page=1&_version=1&pid=&q=&_=1498459883621').then(response=>{
      this.sortFilterData=response.data.result.sortFilter;
    })
  },
  components:{
    ClassifyContentDetail
  }
}
</script>

<style lang="css" scoped>
  .content-down-box {
        width: 100%;
        height: 1.6rem;
        line-height: 1.6rem;
        font-family: "Helvetica Neue","Hiragino Sans GB W3","Hiragino Sans GB","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
        max-width: 1500px;
        box-sizing: border-box;
  }
  .content-box-fix {
       position: relative;
       top: 0;
       width: 11.4rem;
       max-width: 1140px;
       z-index: 30;

  }
  .content-box-item {
       position: relative;
       z-index: 32;
       width: 100%;
       height:1.6rem;
       overflow: hidden;
       background-color:#fff;
       border-bottom:1px solid #eaeaea;
       border-top: 1px solid #eaeaea;
       display: flex;
       justify-content: space-around;
       list-style: none;
       padding: 0;
       margin: 0;
  }
  .content-box-item  li {
        width: 33.33%;
        position: relative;
        text-align: center;
        height: 100%;
        color: #333;
        font-size: 0.56rem;
        line-height:1.6rem;
  }
  .in_border {
       position: relative;
       display: inline-block;
       width:100%;
       height: 0.6rem;
       line-height: 0.6rem;
       border-left:1px solid #e6e6e6;

  }
</style>
