<template lang="html">
  <div class="mod_row">
      <div class="keys_item" v-for="item in Lmsg">
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
</template>

<script>
export default {
  props:['Lmsg']
}
</script>

<style lang="css">
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
</style>
