<template>
	<router-view keep-alive></router-view>
</template>
<script>
	import store from '../vuex/store'
	export default {
		replace: false,
		store
	}	
</script>
<style lang="less">
	//在这里放入一些通用样式
	@import '~assets/css/reset.css';
    @import '~assets/less/var.less';
    @import '~assets/less/common.less';
    .m-box{
    	padding: 100px 0;
    }
</style>