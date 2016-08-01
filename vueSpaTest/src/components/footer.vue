<template>
	<div class="g-ft">
		<div class="g-wrap">
			<div class="m-footer">
				<ul class="ftnav">
					<li><a v-link="'/index'">首页</a></li>
					<li><a v-link="'/demo'">demo</a></li>
					<li><a v-link="'/login'">登录</a></li>
					<li><a v-link="'/xx'">404了</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	
</script>
<style lang="less">
	@import "../assets/less/var.less";
	.m-footer{
		height: 40px;
		line-height: 40px;
		.clearfix();
		.ftnav{
			float: left;
			li{
				float: left;
				a{
					display: block;
					padding:0 20px;
					color:#fff;
					&:hover,&.selected{
						background-color: #000;
					}
				}
			}
		}
	}
</style>