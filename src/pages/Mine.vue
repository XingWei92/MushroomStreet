<template lang="html">
	<div>
		<!-- mine页面头部 -->

		<Mine_header :msg1="headData"></Mine_header>

		<!-- mine页面主体部分 -->
		<div class="mine_body">
			<Mine_order :msg2="orderData"></Mine_order>
			<!-- 收藏部分 -->
			<Mine_collection :msg3="collectData"></Mine_collection>
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
</style>
