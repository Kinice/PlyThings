<template>
	<nv-head></nv-head>
	<div class="g-hd">
		<div class="g-wrap">
			<div class="m-box">
				这里是登录!
			</div>
		</div>
	</div>
	<nv-foot></nv-foot>
</template>
<script>
	export default {
		data (){
			return {

			}
		},
		components: {
			'nvHead': require('../components/header.vue'),
			'nvFoot': require('../components/footer.vue'),
		}
	}
</script>
<style lang="less" scoped>
	.tips{
		margin-top: 30px;
		text-align: center;
		font-size: 16px;
	}
</style>