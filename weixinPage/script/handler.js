(function(){
    //click event handler
    $('.flex-container').on('click',function(e){
        var thisHiddenItem = $($(this).find('.hidden-item')[0]),
            elseHiddenItem = $($(this).siblings('.flex-container').find('.hidden-item')[0]);

        var thisStatus = thisHiddenItem[0].style.display,
            elseStatus = elseHiddenItem[0].style.display;

        if(!thisStatus||thisStatus == 'none'){
            thisHiddenItem.slideDown(200);
            if(elseStatus == 'block'){
                elseHiddenItem.slideUp(200);
            }
        }else{
            return false;
        }
    });

    //confirm event handler
    $('#confirm').on('click',function(e){
        var code = $('#discountCode').val();
        window.location.href='./result.html'+'?code='+code+'&status=ok';
    })
})();