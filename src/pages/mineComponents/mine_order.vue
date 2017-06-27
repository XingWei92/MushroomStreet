<template>
	<!-- 订单部分 -->
		  	<div class="order_info">
		  		<!-- 订单上半部分 -->
		  		<a href="" class="order_top">
		  			<div>
		  				<p class="order_icon">
		  					<img src="https://s10.mogucdn.com/p1/160727/upload_ie4wenzume4tsmjqmezdambqgqyde_56x56.png" alt="">
		  				</p>
		  				<p class="order_title">我的订单</p>
		  			</div>
		  		</a>
		  		<!-- 订单下半部分 -->
		  		<div class="order_bottom">
		  			<a href="" v-for="item of msg2">
		  				<div>
		  					<img :src="item.tipsIcon" alt="">
		  				</div>
		  				<p v-text="item.tipsName"></p>
		  			</a>
		  			</div>
		  		</div>
			</div>
</template>
<script>
	export default{
		props:["msg2"]
	}
</script>
<style lang="css">
	/* 订单部分 */
.mine_body>.order_info{
	width:100%;
	margin-top:.4rem;
	background-color:#fff;
	box-sizing:border-box;
}
/* 订单上半部分 */
.mine_body>.order_info>.order_top{
	display:block;
	text-decoration:none;
}
.mine_body>.order_info>.order_top>div{
	border-bottom:1px solid #e5e5e5;
	height:2rem;
	background:url(https://s10.mogucdn.com/p1/160727/upload_ie4tamrqmu4dsmjqmezdambqgqyde_12x23.png) no-repeat;
	background-position-x:14rem;
	background-position-y:.8rem;
	background-size:.24rem;
	overflow:hidden;
}
.mine_body>.order_info>.order_top>div>.order_icon{
	margin:0;
	width:2.4rem;
	height:2rem;
	float:left;
}
.mine_body>.order_info>.order_top>div>.order_icon>img{
	display:block;
	width:1.12rem;
	height:1.12rem;
	margin:.46rem auto;
	text-align:center;
	border-radius:50%;
}
.mine_body>.order_info>.order_top>div>.order_title{
	margin:0;
	line-height:2rem;
	font-size:.64rem;
	height:2.56rem;
	overflow:hidden;
	box-sizing:border-box;
	float:left;
	white-space:nowrap;
	color:#333;

}
/* 订单下半部分 */
.mine_body>.order_info>.order_bottom{
	height:2.56rem;

}
.mine_body>.order_info>.order_bottom>a{
	display:block;
	float:left;
	width:25%;
	height:2.56rem;
	color:#333;
	text-decoration:none;
}
/* 订单状态图标部分 */
.mine_body>.order_info>.order_bottom>a>div{
	width:.76rem;
	height:.76rem;
	margin:.4rem auto 0 auto;
	position:relative;
	box-sizing:border-box;
}
.mine_body>.order_info>.order_bottom>a>div>img{
	width:100%;
	height:100%;
	vertical-align:top;
}
/* 订单状态文字部分 */
.mine_body>.order_info>.order_bottom>a>p{
	font-size:.56rem;
	margin:.1rem 0;
	text-align:center;
}
</style>