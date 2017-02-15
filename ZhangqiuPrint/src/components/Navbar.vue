<template>
  <header class="g-hd">
    <div class="m-logo">
      <span>章丘打印</span>
    </div>
    <div class="m-user">
      <div class="m-wel">
        <span>{{time}}</span>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data(){
      return{
        time: 'isTime'
      }
    },
    methods: {
      nowTime (){
        let time = new Date(),
            year = time.getFullYear(),
            month = time.getMonth(),
            day = time.getDate();
        this.time = year+'年'+(month+1)+'月'+day+'日';
      }
    },
    mounted(){
      this.nowTime();
    }
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
      line-height: 70px;
      margin-right: 70px;
      position: absolute;
      right: 0;
      top: 0;
      .m-wel{
        span{
          color: #fff;
          font-size: 1.2em;
        }
      }
      .m-exit{

      }
    }
  }
</style>
