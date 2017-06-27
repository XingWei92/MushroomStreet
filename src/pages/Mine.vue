<template lang="html">
	<div>
		<!-- mine页面头部 -->
		<Mine_header :msg1="headData"></Mine_header>

		<!-- mine页面主体部分 -->
		<div class="mine_body">
			<Mine_order :msg2="orderData"></Mine_order>
			<!-- 收藏部分 -->
			<Mine_collection :msg3="collectData"></Mine_collection>
			<!-- 退出登录 -->
			<div class="out_content">
				<a href="">退出登录</a>
			</div>
		</div> 
		
		
	</div>
  
</template>

<script>
import Mine_header from "./mineComponents/mine_header.vue"
import Mine_order from "./mineComponents/mine_order.vue"
import Mine_collection from "./mineComponents/mine_collection.vue"

export default {
	name:"app",
	components:{
		Mine_order,
		Mine_header,
		Mine_collection
	},
	data () {
		return {
			headData:[],
			orderData:[],
			collectData:[]
		}
	},
	created () {
		this.$http.get("../../static/data/Mine.json").then(data => {
			this.headData = data.body.data.profileInfo;
			this.orderData = data.body.data.orderInfo.orderStatus;
			this.collectData = data.body.data.items;
			console.log(data.body.data.items);
		})
	}
}
</script>

<style lang="css">
*{
	margin:0;
	padding:0;
	box-sizing: border-box;
}
/* mine页面主体 */
.mine_body{
	background-color:#f6f6f6;
	width:100%;
	padding-bottom:2.6rem;
	overflow:hidden;
	color:#333;
}
/* 退出登录 */
.mine_body>.out_content{
	width:15rem;
	margin-top:.6rem;
}
.mine_body>.out_content>a{
	display:block;
	width:13.2rem;
	height:1.6rem;
	line-height:1.6rem;
	color:#fff;
	background-color:#ff5777;
	font-size:.6rem;
	margin:0 auto;
	border-radius:8px;
	text-align:center;
	text-decoration:none;
}
</style>
