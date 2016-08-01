<template>
  <div class="wrap">
    <h3>Count is </h3>
  </div>
</template>

<script>
import { getCount } from '../vuex/getters'
export default {
  vuex: {
    getters: {
      // note that you're passing the function itself, and not the value 'getCount()'
      counterValue: getCount
    }
  }
}
</script>
<style lang="less" scoped>
	.wrap{
		margin: 20px;
		border: 10px solid #eee;
	}
</style>