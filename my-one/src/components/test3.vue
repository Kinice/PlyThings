<template>
  <div class="h-body">
    <div class="block">
      <div class="ball b1 red"></div>
      <div class="ball b1 blue"></div>
      <div class="ball b1 black"></div>
    </div>
    <div class="block">
      <div class="ball red1"></div>
      <div class="ball blue1"></div>
      <div class="ball black1"></div>
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
      getAllTags(){
        let tagsArr = [];
        for(var i in document.all){
        	if(document.all[i].tagName){
        		if(tagsArr.length !== 0){
        			var hasThisTag = false;
        			for(var j = 0; j < tagsArr.length; j++){
        				if(document.all[i].tagName==tagsArr[j]){
        					hasThisTag = true;
        					break;
        				}
        			}
        			if(!hasThisTag){
        				tagsArr.push(document.all[i].tagName)
        			}
        		}else{
        		tagsArr.push(document.all[i].tagName)
        		}
        	}
        }
        return tagsArr;
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        console.log(this.getAllTags())
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .block{
    height: 200px;
    width: 350px;
    margin: 50px auto;
    background: #eee;
    position: relative;
    .ball{
      width: 12px;
      height: 12px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -12px;
      margin-top: -12px;
    }
    .b1{
      animation:redball 5s infinite linear;
    }
    .red{
      background: red;
    }
    .blue{
      background: blue;
      animation-delay: 3.33333s !important;
    }
    .black{
      background: black;
      animation-delay: 1.66666s !important;
    }
    .red1{
      background: red;
      animation:redball 5s infinite linear;
    }
    .blue1{
      background: blue;
      animation:blueball 5s infinite linear;
    }
    .black1{
      background: black;
      animation:blackball 5s infinite linear;
    }
    @keyframes redball{
      8.33333%,25%{
        transform: translateX(-50px);
      }
      16.66666%,33.33333%,41.66666%,50%,66.66666%,83.33333%,91.66666%,100%{
        transform: translateX(0px);
      }
      58.33333%,75%{
        transform: translateX(50px);
      }
    }
    @keyframes blueball{
      16.66666%,33.33333%,50%,58.33333%,66.66666%,83.33333%,100%{
        transform: translateX(0px);
      }
      25%,41.66666%{
        transform: translateX(50px);
      }
      75%,91.66666%{
        transform: translateX(-50px);
      }
    }
    @keyframes blackball{
      8.33333%,91.66666%{
        transform: translateX(50px);
      }
      16.66666%,25%,33.33333%,50%,66.66666%,75%,83.33333%{
        transform: translateX(0px);
      }
      41.66666%,58.33333%{
        transform: translateX(-50px);
      }
    }
  }
</style>
