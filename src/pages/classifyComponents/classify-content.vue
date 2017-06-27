<template lang="html">
  <div id="classify-content">
     <div class="content-right">
        <div class="content-enter">
            <div class="conten-text">
              <div class="conten-main" v-for = 'item of contentData'>
                <div class="conten-main-box">
                  <img :src="item.image" alt="图片">
                </div>
                <p class="conten-p">{{ item.title+''+$route.params.maitKey}}</p>
              </div>
            </div>
        </div>
     </div>
     <Classify-bown></Classify-bown>
  </div>
</template>
<script>
import ClassifyBown from './classify-content-down.vue'
export default {
  data(){
    return {
      resData : []
    }
  },
  // 把请求数据放在计算属性，一旦数据改变，就重新计算。
    computed:{
       contentData: function () {
         this.$http.jsonp("http://mce.mogujie.com/jsonp/makeup/3?pid="+this.$route.params.maitKey).then(response => {
            this.resData = response.data.data.categoryNavigation.list;
           },error => {
            console.log(error);
           })
            return this.resData;
    }
  },
 components : {
      ClassifyBown
  }
}
</script>

<style lang="css" scoped>
#classify-content {
        padding-left:3.6rem;
        background-color: #fff;
        min-height:6rem;
        width: auto;
}
.content-right{
        width: 100%;
        padding: 0.6rem 0.4rem 0 0.4rem;
        box-sizing: border-box;
}
.content-enter {
        margin-bottom:0;
        padding-bottom:0.7rem;


}
.conten-text {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        overflow: hidden;
}
.conten-main {
        width: 3.52rem;
        height: 3.8rem;
        margin:0.4rem 0;
        overflow: hidden;
        width: 33.33%;
}
.conten-main-box {
        width: 2.6rem;
        height: 2.6rem;
        margin: 0 auto;
        cursor: auto;
}
.conten-main-box>img{
      width: 100%;
      height: 100%;
}
.conten-p {
     font-size: 0.48rem;
     color: #666666;
     text-align: center;
     line-height: 0.76rem;
     margin-top: 0.4rem;


}
</style>
