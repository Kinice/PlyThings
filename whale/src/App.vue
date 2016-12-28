<template>
  <div id="app">
    <frame></frame>
    <img src="./assets/logo.png">
  </div>
</template>

<script>
import Hello from './components/Hello'
import frame from './components/frame'

export default {
  name: 'app',
  components: {
    Hello,
    frame
  }
}
</script>

<style>
@import '~assets/less/reset.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
