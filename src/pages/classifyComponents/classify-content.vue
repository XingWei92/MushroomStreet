<template lang="html">
  <div id="classify-content">
     <div class="content-right">
        <div class="content-enter">
            <div class="conten-text">
              <div class="conten-main">

              </div>
            </div>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      maitKey:this.$route.params.maitKey,
      resData : []
    }
  },
  created(){
    console.log(this.maitKey);
    this.$http.jsonp("http://mce.mogujie.com/jsonp/makeup/3?pid="+this.maitKey).then(response => {
      console.log(response.data.data.categoryNavigation.list);
      var res = response.data.data.categoryNavigation.list;
      this.resData = res;

    })
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
        border: 1px solid #E5E5E5;

}
.conten-text {
        display: flex;
        justify-content: space-around;
                                            
        overflow: hidden;
}

</style>
