(function(){
    var selectResult = [],
        count = 0,
        maxcount = 5
    $('.img-con').on('click','.f-select-con',function(e){
        if($(this).find('.f-select').length>0){
            if(count == maxcount){
                weui.alert('最多只能选择'+maxcount+'张曲谱图片', {
                    buttons: [{
                        label: '我知道了',
                        type: 'primary'
                    }]
                });
                return
            }

            var src = $(this).siblings('img')[0].src

            count ++ 

            selectResult.push(src)

            $(this).empty().append('<i class="f-selected">'+count+'</i>')

            if(count == maxcount){
                for(var i = 0; i < $('.img-item').length; i++){
                    if($($('.img-item')[i]).find('.f-select').length>0){
                        $($('.img-item')[i]).append('<div class="item-wrap"></div>')
                    }
                }
            }
        }else if($(this).find('.f-selected').length>0){
            var index = this.children[0].innerHTML-1

            count --

            selectResult.splice(index,1)

            $(this).empty().append('<i class="f-select iconfont icon-test"></i>')

            if(index<count){
                for(var i = 0; i < count; i++){
                    if($('.f-selected')[i].innerHTML>index){
                        $('.f-selected')[i].innerHTML = $('.f-selected')[i].innerHTML - 1
                    }
                }
            }
            if(count != maxcount){
                $('.item-wrap').remove()
            }
        }else{
            alert('?')
        }
    })
}())

//<i class="f-selected">2</i> <div class="item-wrap"></div>