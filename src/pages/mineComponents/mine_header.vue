<template lang="html">
<!-- mine页面头部 -->
		<div class="mine_head">
	<!-- 用户头像 -->
		  	<div class="head_photo">
		  		<img :src="msg1.avatarUrl" alt="">
		  	</div>
		  	<!-- 用户信息 -->
		  	<div class="head_userinfo">
		  		<!-- 用户名 -->
		  		<p v-text="msg1.userName"></p>
		  		<!-- 收货地址 -->
		  		<a href="">
		  			<p>我的收货地址</p>
		  		</a>
		  	</div>
		</div>
</template>
<script>
	export default{
		props:["msg1"]	
	}
	
</script>
<style lang="css">
/* mine页面头部 */
.mine_head{
	width:100%;
	height:3.6rem;
	display:flex;
	box-sizing:border-box;
}
	/* 用户头像 */
.mine_head>.head_photo{
	width:3.22rem;
	height:3.58rem;
	padding-left:.8rem;
	padding-top:.88rem;
	vertical-align: baseline;
	display:block;
	box-sizing:border-box;
}
.mine_head>.head_photo>img{
	border-radius:50%;
	width:1.8rem;
	height:1.8rem;
}
/* 用户信息 */
.mine_head>.head_userinfo{
	vertical-align: baseline;
	box-sizing:border-box;
}
/* 用户名 */
.mine_head>.head_userinfo>p{
	margin:0;
	line-height:1rem;
	padding-top:0.8rem;
	font-size:0.72rem;
	color:#333;
}
/* 收货地址 */
.mine_head>.head_userinfo>a{
	display:block;
	text-decoration:none;
	
}
.mine_head>.head_userinfo>a>p{
	margin:0;
	color:#333;
	margin-top:.12rem;
	padding-right:.4rem;
	font-size:.48rem;
	background:url(https://s10.mogucdn.com/p2/170220/79944927_8e8k2bik3ek6ij1eh06li9lcf86jd_13x23.png) no-repeat 100%;
	background-size:.26rem auto;
}
</style>