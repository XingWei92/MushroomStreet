<template lang="html">
  <div class="classify-content-detail">
    <h1>{{resData}}</h1>
  </div>
</template>

<script>
export default {
  data(){
    return{
      resData:{}
    }
  },
  created(){
    this.$http.jsonp('https://list.mogujie.com/search?cKey=h5-cube&fcid=10062603&page=1&_version=1&pid=&q=&cpc_offset=0&sort='+this.$route.params.sortKey).then(response => {
      this.resData = response.data;
      console.log(this.resData);
    },error => {
     console.log(error);
    })
  },
  // watch:{
  //     key(newKey,oldKey){
  //       console.log(newKey);
  //       console.log(oldKey);
      // this.$http.jsonp('https://list.mogujie.com/search?cKey=h5-cube&fcid=10062603&page=1&_version=1&pid=&q=&cpc_offset=0&sort='+newKey).then(response => {
      //    this.resData = response.data;
      //    console.log(this.resData);
      //   },error => {
      //    console.log(error);
      //   })
    // }
    watch: {
      '$route' (to, from) {
        // console.log(1)
         this.$http.jsonp('https://list.mogujie.com/search?cKey=h5-cube&fcid=10062603&page=1&_version=1&pid=&q=&cpc_offset=0&sort='+this.$route.params.sortKey).then(response => {
           this.resData = response.data;
           console.log(this.resData);
         },error => {
          console.log(error);
         })
      }
    }
}
</script>

<style lang="css">
</style>
