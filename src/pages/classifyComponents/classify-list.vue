<template lang="html">
  <div class="classify-list">
   <div class="list-context">
       <ul class="uls">
          <li v-for = 'item of allData '>
              <router-link
              <router-link :to="{name:'classify',params:{maitKey:item.maitKey,miniWallkey:item.miniWallkey}}">
                 {{ item.title}}
               </router-link>
          </li>
      </ul>
   </div>
  </div>
</template>

<script>
    export default {
      created () {
        this.$http.jsonp('http://mce.mogucdn.com/jsonp/multiget/3?pids=41789%2C4604&callback').then(data =>{
                  // console.log(data.data.data);
                    this.allData = data.data.data[41789].list
          }, error =>{
                    console.log(error);
          })
      },
      data () {
            return {
                allData : []
            }
          }
    }
</script>

<style lang="css" scoped>
.classify-list {
        height: 1144px;
        width: 3.6rem;
        position: fixed;
        overflow: hidden;
        background-color: #fff;
        z-index: 20;
        box-sizing: border-box;
}
.list-context{
   height: 1144px;
   width: 4rem;
   overflow-x: hidden;
   overflow-y: scroll;
   background-color: #F6F6F6;
   box-sizing: border-box;
}
.uls{
  margin: 0;
  padding: 0;
  width: 100%;
    box-sizing: border-box;
    list-style: none;
}
.uls li {
    position: relative;
    height: 1.8rem;
    line-height: 1.8rem;
    text-align: center;
    font-size: .56rem;
    box-sizing: border-box;
}
.uls li a{
  position: absolute;
  width: 80%;
  height:0.6rem;
  top: 50%;
  left: 50%;
  margin-top:-0.3rem;
  margin-left: -2rem;
  line-height: .6rem;
  text-decoration: none;
  color: #666666;

}
.uls .router-link-active {
    color:#FF5777;
    background-color: #ffff;

}
</style>
