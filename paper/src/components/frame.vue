<template>
  <div class="g-bd">
    <navbar></navbar>
    <div class="g-main">
      <el-row>
        <el-col :span="3">
          <sidebar></sidebar>
        </el-col>
        <el-col :span="21">
          <router-view></router-view>
        </el-col>
      </el-row>
    </div> 
  </div>
</template>

<script>
  import navbar from './Navbar'
  import sidebar from './Sidebar'

  export default {
    data(){
      return{

      }
    },
    methods: {

    },
    components: {
      navbar,sidebar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .g-main{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: 70px;
    .el-row{
      height: 100%;
      .el-col{
        height: 100%;
      }
    }
  }
</style>
