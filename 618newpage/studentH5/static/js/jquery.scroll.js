;(function(){
    var cHeight = document.documentElement.clientHeight;

    $(window).on('scroll',function(e){
        if($('body').scrollTop()>(cHeight/2)){
            $('.getNow').css('bottom','0');
        }else{
            $('.getNow').css('bottom','-1.4rem');
        }
    });

    $('#goTop').on('click',function(){
        $('html,body').animate({
            scrollTop: 0
        },500);
    })
}());