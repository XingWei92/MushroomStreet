<template lang="html">
  <div class="home_content">
    <div class="sales_promotion">
      <p class="sales_text">超实惠-促销直达</p>
      <div class="sales_goods_shows">
          <div :class="'women_dress'+index" v-for="(item,index) in msg" class="women_dress">
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
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
  props:['msg']


=======
  props:['msg'],
  data(){
    return {
      lazyListData:[],
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
>>>>>>> 5712223bbcf4890f8054f512e4d9b6d2290b3963
}
</script>

<style lang="css">
.home_content{
  background-color:#f6f6f6;
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

</style>
