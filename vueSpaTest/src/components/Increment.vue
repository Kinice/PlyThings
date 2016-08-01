<template>
  <div class="wrap">
    <button @click='increment'>Increment +1</button>
  </div>
</template>

<script>
import { incrementCounter } from '../vuex/actions'
export default {
  vuex: {
    actions: {
      increment: incrementCounter
    }
  }
}
</script>
<style lang="less" scoped>
	.wrap{
		margin: 20px;
		border: 10px solid orange;
	}
</style>