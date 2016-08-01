<template>
	<nv-head></nv-head>
	<div class="g-hd">
		<div class="g-wrap">
			<div class="m-box">
				<display></display>
				<increment></increment>
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
			'display': require('../components/Display.vue'),
			'increment': require('../components/Increment.vue'),
		}
	}
</script>
<style lang="less">
	
</style>