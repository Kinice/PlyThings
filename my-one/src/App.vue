<template>
  <div id="app">
    <conFrame></conFrame>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import conFrame from './components/frame'

export default {
  components: { Navbar , conFrame }
}
</script>

<style lang="sass">
  @import 'assets/less/reset.less'

  //some styling adaptations
  p
    text-align: justify
  body,html
    height: 100%
  #app
    height: 100%
</style>
