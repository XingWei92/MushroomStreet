<template lang="html">
  <div class="home_content">
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
    <div class="mod_time_row">
      <div class="mod_time_wrap">
        <div class="time">
          <div class="left_spear">
            <div class="time_spear_text">
              <div class="time_spear_text_p">{{timeData.title}}<span style="color:rgb(0,0,0);"></span>{{timeData.viceTitle}}</div>
            </div>
            <div class="counting">
              <span>00</span>:
              <span>25</span>:
              <span>36</span>
            </div>
          </div>
          <div class="more">
            <img src="https://s10.mogucdn.com/p1/160719/upload_ifrwkntcmi4diolehezdambqhayde_84x20.png" alt="">
          </div>
        </div>
        <div class="show_goods">
          <div class="goods_wrap">
            <div class="goods_item"  v-for="good in msg[41119].list[0].list">
              <div class="goods_img">
                <img :src="good.img" alt="">
              </div>
              <p class="item_title">{{good.title}}</p>
              <p class="item_price">￥{{good.salePrice}}<span><del>￥{{good.price}}</del></span></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 超实惠-促销直达 -->
    <div class="sales_promotion">
      <p class="sales_text">超实惠-促销直达</p>
      <div class="sales_goods_shows">
          <div :class="'women_dress'+index" v-for="(item,index) in salesData" class="women_dress">
            <div :class="'sales_goods_text'+index" class="sales_goods_text">
              <div class="momen_buy" :class="'momen_buy'+index">{{item.title}}</div>
              <div class="momen_discount" :class="'momen_discount'+index">{{item.viceTitle}}</div>
            </div>
            <div class="sales_goods_img " :class="'sales_goods_img'+index">
              <img :src="item.image" alt="">
            </div>
          </div>
      </div>
    </div>

   <!-- 热门市场 -->
   <div class="hot_market">
      <div class="hot_market_wrap">
        <div class="hot_title">热门市场</div>
        <div class="hot_show">
          <div class="hot_show_wrap">
            <div class="hot_show_list" v-for="hot in listData">
              <div class="hot_show_img">
                <img :src="hot.image" alt="">
              </div>
              <div class="hot_list_text">{{hot.title}}</div>
            </div>
          </div>
        </div>
      </div>
   </div>


  <!-- 填充 -->
  <div class="home_fill"></div>
  </div>
</template>

<script>
export default {
  props:['msg'],
  data(){
    return {
      lazyListData:[],
      // // lazyListData:[],
      //  rushData:this.homeData[41119].list[0].list,
      //  timeData:this.homeData[41119].list[0],
      // salesData:this.homeData[51833].list,
      // listData:this.homeData[51836].list
      // lazyListData:this.homeData[51827].list;
      // lazyListData:[],
       rushData:[],
       timeData:{},
      salesData:[],
      listData:[]
    }
  },
  created(){
    console.log(this.msg);
  //   this.$http.jsonp('http://mce.mogucdn.com/jsonp/multiget/3?pids=51822%2C51827%2C41119%2C51833%2C51836%2C4604').then(response=>{
  //     //console.log(response.data.data[51827].list);
  //     this.lazyListData=response.data.data[51827].list;
  //     this.rushData=response.data.data[41119].list[0].list;
  //     //console.log(response.data.data[41119].list[0]);
  //     this.timeData=response.data.data[41119].list[0]
  //     //console.log(this.timeData);
  //     //console.log(response.data.data[51833].list);
  //     this.salesData=response.data.data[51833].list;
  //     //console.log(this.rushData);
  //     console.log(response.data.data[51836].list);
  //     this.listData=response.data.data[51836].list
  //   })
  }
}
</script>

<style lang="css">
.home_content{
  background-color:#f6f6f6;
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

/*限时购*/
.mod_time_row{
  background-color:#fff;
  margin:0 auto;
  position:relative;
  height:auto;
  box-sizing: border-box;
}
.mod_time_wrap{
  margin:.4rem auto .4rem;
  height:7.42rem;
  overflow: hidden;
}
.time{
  width:100%;
  height:auto;
  padding:.6rem .7rem .4rem .6rem;
  position:relative;
  box-sizing: border-box;
}
.time:after{
  content:"";
  display: block;
  clear:both;
  height:0;
}
.left_spear{
  float: left;
  width:auto;
  /*height:.84rem;
  line-height: .84rem;*/
}
.time_spear_text{
  color:rgb(0,0,0);
  display: inline-block;
  font-size: .6rem;
}
.time_spear_text_p{
  padding:0;
  margin:0;
}
.time_spear_text_p span{
  width:.16rem;
  height:.16rem;
  display: inline-block;
  background-color: black;
  border-radius: .2rem;
  margin:0 .24rem .1rem .24rem;
}
.counting{
  display: inline-block;
  margin-left: .1rem;
}
.counting span{
  color:white;
  font-size:.5rem;
  line-height: .8rem;
  display: inline-block;
  padding:0 0.12rem;
  background-color:black;
  border-radius: .06rem;
  margin:auto .1rem;
}
.more{
  display: inline;
  float: right;
  line-height: 1.5;
  font-size:.6rem;
  min-width:1rem;
  text-align: right;
}
.more img{
  height:.5rem;
  margin-top:-0.02rem;
  vertical-align: middle;
}
.show_goods{
  padding:0.1rem 0 .16rem .3rem;
  box-sizing: border-box;
}
.goods_wrap{
  overflow-x:scroll;
  overflow-y: hidden;
  white-space: nowrap;
  box-sizing: border-box;
}
Pseudo::serollbar element
.goods_wrap:after{
  display: none;
  width: 0 !important;
  opacity: 0;
}

.goods_item{
  width:3.6rem;
  height:5rem;
  margin-right:.4rem;
  display: inline-block;
  box-sizing: border-box;
  white-space:nowrap;
}
.goods_img{
  width:3rem;
  overflow: hidden;
  position: relative;
  margin:0 0.3rem;
  box-sizing: border-box;
  white-space: nowrap;
}
.goods_img img{
  max-width:100%;
}
.item_title{
  font-size:.48rem;
  margin:.3rem 0 0 ;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  line-height: .72rem;
}
.item_price{
  font-size:.52rem;
  line-height: .76rem;
  margin:0;
  color:#f25;
  white-space:nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item_price span{
  color:#888;
  font-size:.4rem;
}

/*实惠，促销直达*/
.sales_promotion{
  margin:.4rem 0 0 0;
  width:100%;
  position:relative;
  box-sizing: border-box;
}
.sales_text{
  width:100%;
  height:1.6rem;
  line-height: 1.68rem;
  background-color:#fff;
  color:#333;
  text-indent:.4rem;
  font-size:.56rem;
  font-weight:normal;
  margin:0;
}
.sales_goods_shows{
  background-color: #fff;
  margin-bottom: .2rem;
  position: relative;
  height:11.5rem;
}
.women_dress{
  position:absolute;
  border-right:1px solid #e5e5e5;
  border-top:1px solid #e5e5e5;
  box-sizing: border-box;
}
.women_dress0{
  height:6.4rem;
  width:50%;
  /*//float: left;*/
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top:0;
  left:0;
}
.women_dress1,.women_dress2{
  left: 50%;
  width:50%;
  height:3.2rem;
  box-sizing: border-box;
}
.women_dress1{
  top:0;
}
.women_dress2{
  top:3.2rem;
}
.women_dress3,.women_dress4,.women_dress5{
  top:6.4rem;
  box-sizing: border-box;
  width:33.33%;
  height:5.1rem;
}
.women_dress3{
  left: 0;
}
.women_dress3{
  left:33.3%;
}
.women_dress4{
  left:66.6%;
}

.sales_goods_text{
 width:100%;
 margin-top:1.08rem;
 box-sizing: border-box;
}
.sales_goods_text1,.sales_goods_text2{
  float: left;
  margin-left:.5rem;
  width:30%;
}
.sales_goods_text3,.sales_goods_text4,.sales_goods_text5{
  margin-top:.23rem;
}
.momen_buy{
  font-size:.48rem;
  line-height: .8rem;
  color:#333;
  text-overflow: ellipsis;
  font-weight: bold;
  text-align: center;
}
.momen_buy1,.momen_buy2{
  text-align: left;
}
.momen_discount{
  font-size:.48rem;
  line-height: .66rem;
  color:#ff5f7e;

  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}
.momen_discount1,.momen_discount2{
  text-align: left;
}
.sales_goods_img0{
  bottom:0;
  margin-left: 20%;
  width:4rem;
  height:4rem;
  overflow: hidden;

}
.sales_goods_img img{
  width:100%;
  height:100%;
}
.sales_goods_img1,.sales_goods_img2{
  float: right;
  width:42.5%;

}
.sales_goods_img3,.sales_goods_img4,.sales_goods_img5{
  margin:.1rem auto 0;
  width:64%;
  height:64%;
  box-sizing: border-box;
}

/*热门市场*/

/*填充*/
.home_fill{
  height:1.96rem;
}
</style>
