<template>
	<div class="g-hd">
		<div class="g-wrap">
			<div class="m-header">
				<div class="logo" v-link="{name:'index'}"></div>
			</div>
		</div>
	</div>
</template>
<script>
	import utils from '../libs/utils'
	export default {
		data (){
			return {
				webTitle: 'vue spa'
			}
		}
    }
</script>
<style lang="less">
	@import "../assets/less/var.less";
	.m-header{
		padding:10px 0;
		height: 50px;
		.clearfix();
		.logo{
			float: left;
			line-height: 30px;
			font-size: 18px;
			cursor: pointer;
		}
	}
</style>