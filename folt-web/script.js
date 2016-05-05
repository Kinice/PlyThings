 var isAnimating = false;

var mainLength = 500;
var gameMatrix = [];
function createBottomBlocks(gameWidth,oneRowBlocks){
    var blockWidth = gameWidth/oneRowBlocks;
    $('.game-container').css({
      'width': gameWidth,
      'height': gameWidth
    });
    for(var i = 0; i < oneRowBlocks; i++){
      gameMatrix[i] = [];
      for (var j = 0; j < oneRowBlocks; j++) {
        gameMatrix[i].push('0');
        $('.game-container').append('<div class="block b-'+i+'-'+j+'" style="width:'+blockWidth+'px;height:'+blockWidth+'px;top:'+i*blockWidth+'px;left:'+j*blockWidth+'px;"></div>');
      }
    }
    $('.b-'+1+'-0').addClass('checked');
}
createBottomBlocks(mainLength,10);
$('.add').click(function(){
  if(!isAnimating){
    $('.b-0-0').addClass('transR');
    isAnimating = true;
    timer = setTimeout(function(){
      isAnimating = false;
      $('.block').removeClass('transR');
    },400);
  }else{
    return;
  }
});
