<template lang="html">
  <div class="hot_market">
     <div class="hot_market_wrap">
       <div class="hot_title">热门市场</div>
       <div class="hot_show">
         <div class="hot_show_wrap">
           <div class="hot_show_list" v-for="hot in hotMsg">
             <div class="hot_show_img">
               <img :src="hot.image" alt="">
             </div>
             <div class="hot_list_text">{{hot.title}}</div>
           </div>
         </div>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  props:['hotMsg']
}
</script>

<style lang="css">
  .hot_market{

  }
  .hot_market_wrap{
    width:100%;
    position:relative;
    background-color:#fff;
    margin-bottom: .4rem !important;
    overflow: hidden;
    padding-top:.6rem;
  }
  .hot_title{
    background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATkAAAAKAgMAAACyFsHVAAAADFBMVEVMaXEzMzMzMzP///8xqFqyAAAAAnRSTlMAtlSR24EAAAABYktHRAMRDEzyAAAAQElEQVQoz2NgoDkQIVZhAHHKMok0jnEJccpWORBnHttK4pStmkCceVJYLV6FCkg1TwtVewPt/Uvt+KB6eqEIAACpih6NjokEAgAAAABJRU5ErkJggg==") no-repeat center center;
    background-size:41% auto;
    color:#333;
    font-size:.6rem;
    height:.8rem;
    line-height: .8rem;
    text-align: center;
    margin:0 0 .4rem;
  }
  .hot_show{

  }
  .hot_show_wrap{

  }
</style>
