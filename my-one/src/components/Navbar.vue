<template>
  <header class="g-hd">
    <div class="m-logo">
      <span>Kinice SPA</span>
    </div>
    <div class="m-user">
      <div class="m-wel">
        欢迎您：<span>管理员</span>
      </div>
      <div class="m-exit">
        <a href="#">退出</a>
      </div>
    </div>
  </header>
</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
  .g-hd{
    height: 70px;
    background: #324057;
    min-width: 875px;
    .m-logo{
      line-height: 70px;
      margin-left: 70px; 
      //替换
      span{
        color: #fff;
        font-size: 2.2em;
      }
    }
    .m-user{
      .m-wel{

      }
      .m-exit{

      }
    }
  }

</style>
