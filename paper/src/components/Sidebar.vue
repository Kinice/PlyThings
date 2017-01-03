<template>
  <div class="g-sidebar">
    <el-menu default-active="1">
      <router-link to="/"><el-menu-item index="1" ><i class="el-icon-message"></i>导航一</el-menu-item></router-link>
      <router-link to="/test"><el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item></router-link>
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  import navbar from './Navbar'

  export default {
    data(){
      return{

      }
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .g-sidebar{
    height: 100%;
    background: #eff2f7;
  }
</style>
