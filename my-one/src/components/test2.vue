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
    <div class="block test9">
      
    </div>
    <div class="block test10">
      
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
  .test9{
    background: #655;
    background-image: radial-gradient(tan 25%, transparent 0),
                      radial-gradient(tan 25%, transparent 0);
    background-size: 30px 30px;
    background-position: 0 0,15px 15px;
  }
  .test10{
    background: #eee;
    background-image: linear-gradient(45deg, #ccc 25%, transparent 0),
                      linear-gradient(45deg, transparent 74.99%, #ccc 0),
                      linear-gradient(45deg, #ccc 25%, transparent 0),
                      linear-gradient(45deg, transparent 74.99%, #ccc 0);
    background-position: 0 0,15px 15px,15px 15px,30px 30px;
    background-size: 30px 30px;
  }
</style>
