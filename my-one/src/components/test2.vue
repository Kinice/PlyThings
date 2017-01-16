<template>
  <div class="h-body">
    <div class="block test1">
      
    </div>
    <div class="block test2">
      
    </div>
    <div class="block test3">
      
    </div>
    <div class="block test4">
      
    </div>
    <div class="block test5">
      
    </div>
    <div class="block test6">
      
    </div>
    <div class="block test7">
      
    </div>
    <div class="block test8">
      
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    methods: {

    }
  }
</script>

<style lang="less" scoped>
  .block{
    height: 200px;
    width: 350px;
    margin: 50px auto;
  }
  .test1{
    background: linear-gradient(#fb3 50%,#58a 0);
    background-size: 100% 45px;
  }
  .test2{
    background: linear-gradient(90deg,#fb3 50%,#58a 0);
    background-size: 64px 100%;
  }
  .test3{
    background: linear-gradient(45deg,#fb3 50%,#58a 0);
    background-size: 100% 40px;
  }
  .test4{
    background: linear-gradient(45deg,#fb3 50%,#58a 0);
    background-size: 60px 100%;
  }
  .test5{
    background: linear-gradient(29.5deg,#fb3 50%,#58a 0);
    background-size: 100% 100%;
  }
  .test6{
    background: linear-gradient(45deg,#fb3 50%,#58a 0);
    background-size: 30px 30px;
  }
  .test7{
    background: linear-gradient(45deg,#fb3 25%,#58a 0,
                                      #58a 50%,#fb3 0,
                                      #fb3 75%,#58a 0);
    background-size: 40px 40px;
  }
  .test8{
    background: repeating-linear-gradient(70deg,#fb3,#fb3 15px,#58a 15px,#58a 30px);
  }
</style>
