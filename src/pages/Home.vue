<template lang="html">
  <div class="home">
    <div class="mod_row">
        <div class="keys_item" v-for="item in lazyListData">
          <div class="text_box">
            <p class="text_title">{{item.title}}</p>
            <p class="text_des">{{item.description}}</p>
            <div class="img_box">
              <div class="img_wrap">
                <img :src="item.image" alt="">
              </div>
            </div>
          </div>
        </div>
    </div>

    <!-- 限时抢购 -->
    <div class="mod_row">
      <div class="time">
        <div class="left_spear">
          <div class="time_spear_text">
            <p>{{timeData.title}}<span style="color:rgb(0,0,0);">{{timeData.viceTitle}}</span></p>
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
      lazyListData:[],
      rushData:[],
      timeData:{}

    }
  },
  created(){
    this.$http.jsonp('http://mce.mogucdn.com/jsonp/multiget/3?pids=51822%2C51827%2C41119%2C51833%2C51836%2C4604').then(response=>{
      //console.log(response.data.data[51827].list);
      this.lazyListData=response.data.data[51827].list;
      this.rushData=response.data.data[41119].list[0].list;
      //console.log(response.data.data[41119].list[0]);
      this.timeData=response.data.data[41119].list[0]
      console.log(this.timeData);
      //console.log(this.rushData);
    })
  }
}
</script>

<style lang="css">
.module_row{

}
.mod_row{
  width:100%;
  margin:0 auto;
  position:relative;
  background-color:#fff;
  margin-bottom:.4rem;
  overflow: hidden;
  padding-top:.4rem;
  font-size:.48rem;
}
.keys_item{
  float:left;
  width:30%;
  margin-bottom:.2rem;
  position:relative;
  box-sizing: border-box;
}
.keys_item:after{
  content:'';
  width:1px;
  height:81.2%;
  border-right:1px solid #eee;
  position:absolute;
  right:-1px;
  top:10%;
}
.text_box p{
 display: block;
}
.text_box{
  padding:0 10%;
  box-sizing: border-box;
  cursor:auto;
}
/*.mod_row:after{
  content:'';
  display: block;
  clear:both;;
  height:0;

}*/
.text_title{
  color:#ff6801;
  height:.72rem;
  line-height: .72rem;
  width:100%;
  text-align: center;
  margin:0 auto 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.text_des{
  margin:.1rem auto .3rem;
  color:#666;
  text-align: center;
  height:.6rem;
  line-height: .6rem;
  width:100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.img_box{
  margin:0 auto;
}
.img_wrap{
  position:relative;
  width:100%;
  margin:0 auto;
  box-sizing: border-box;
  cursor: auto;
}
.img_wrap img{
  width:100%;
  border:none;
  vertical-align: middle;
}
</style>
