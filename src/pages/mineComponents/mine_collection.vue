<template lang="html">
	<!-- 收藏部分 -->
	<div class="mine_collection">
		<a href="" class="collect_list" v-for="(item,index) of msg3" :class="'dif'+index">
			<div>
				<p class="item_icon">
					<img :src="item.icon" alt="">
				</p>
				<div class="item_main">
					<p class="item_title" v-text="item.title"></p>
					<p class="coupon_num"></p>
				</div>
			</div>
		</a>
	</div>
</template>
<script>
	export default{
		props:["msg3"]
	}
</script>
<style lang="css">
.mine_collection{
	width:100%;
	margin-top:.4rem;
	background-color:#fff;
	display:block;
}
.mine_collection>.collect_list{
	display:block;
	text-decoration:none;
	color:#333;
}
.mine_collection>.collect_list>div{
	height:2.02rem;
	background:url(https://s10.mogucdn.com/p1/160727/upload_ie4tamrqmu4dsmjqmezdambqgqyde_12x23.png) no-repeat 14rem  .8rem;
	background-size:.24rem;

}
.mine_collection>.collect_list>div>.item_icon{
	width:2.4rem;
	height:2rem;
	float:left;
}
.mine_collection>.collect_list>div>.item_icon>img{
	display:block;
	width:1.12rem;
	height:1.12rem;
	margin:.46rem auto;
	text-align:center;
	border-radius:50%;
}
.mine_collection>.collect_list>div>.item_main{
	border-bottom:2px solid #e5e5e5;
	width:12.6rem;
	height:2rem;
	line-height:2rem;
	font-size:.64rem;
	color:#333;
	float:left;
	white-space:nowrap;
}
.mine_collection>.dif5{
	margin-top:.4rem;
}
.mine_collection>.dif5>div{
	height:3rem;
}
.mine_collection>.dif5>div>.item_icon{
	width:100%;
	height:2.6rem;

}
.mine_collection>.dif5>div>.item_icon>img{
	display:block;
	width:15rem;
	height:2.6rem;
	margin-top:0;
	border-radius:0;
}
.mine_collection>.dif5>div>.item_main{
	width:100%;
	height:.4rem;
	background-color:#f6f6f6;
}
</style>