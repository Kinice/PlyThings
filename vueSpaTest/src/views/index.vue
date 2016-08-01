<template>
	<nv-head></nv-head>
	<div class="g-hd">
		<div class="g-wrap">
			<div class="m-box">
				这里是首页
				<img src="../assets/images/1.png" alt="">
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
<style lang="less">
    
</style>