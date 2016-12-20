<template>
  <div class="hello">
    <fieldset>
      <legend class="le">Test</legend>
      <div class="tes">
        
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello{
  text-align: left;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

fieldset{
  height: 400px;
  width: 1000px;
  margin: 0 auto;
  position: relative;
  .tes{
    width: 100px;
    height: 100px;
    background: #bc45bc;
    position: absolute;
    top: 0;
    left: 0;
  }
}

</style>
