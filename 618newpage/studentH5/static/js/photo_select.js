/* Author: Kinice */
(function(){
    var html = {
        selectedStart: '<i class="f-selected">',
        selectedEnd: '</i>',
        itemWrap: '<div class="item-wrap"></div>',
        notSelect: '<i class="f-select iconfont icon-test"></i>'
    }

    var _extend = function (o, o1) {
        if (typeof o1 === 'object') {
            for (var i in o) {
                o[i] = o1[i] || o[i]
            }
            return o
        }
        return o
    }

    function photoSelect(config){
        this.config = _extend({
            maxCount: 18,
            setCount: 0,
            container: '.img-con',
            selectContainer: '.f-select-con'
        },config)

        this.nowCount = 0
        this.count = this.config.maxCount - this.config.setCount
        this.selectResult = []
        this.init()
    }

    photoSelect.prototype.init = function (){
        var ps = this,
            con = ps.config

        $(con.container).on('click',con.selectContainer,function(e){
            if($(this).find('.f-select').length>0){
                if(ps.nowCount == ps.count){
                    weui.alert('最多还能选择'+ps.count+'张曲谱图片', {
                        buttons: [{
                            label: '我知道了',
                            type: 'primary'
                        }]
                    });
                    return
                }

                var src = $(this).siblings('img')[0].src

                ps.nowCount ++ 

                ps.selectResult.push(src)

                $(this).empty().append(html.selectedStart+ps.nowCount+html.selectedEnd)

                if(ps.nowCount == ps.count){
                    for(var i = 0; i < $('.img-item').length; i++){
                        if($($('.img-item')[i]).find('.f-select').length>0){
                            $($('.img-item')[i]).append(html.itemWrap)
                        }
                    }
                }
            }else if($(this).find('.f-selected').length>0){
                var index = this.children[0].innerHTML-1

                ps.nowCount --

                ps.selectResult.splice(index,1)

                $(this).empty().append(html.notSelect)

                if(index<ps.nowCount){
                    for(var i = 0; i < ps.nowCount; i++){
                        if($('.f-selected')[i].innerHTML>index){
                            $('.f-selected')[i].innerHTML = $('.f-selected')[i].innerHTML - 1
                        }
                    }
                }
                if(ps.nowCount != ps.count){
                    $('.item-wrap').remove()
                }
            }else{
                alert('?')
            }
        })
    }
    window.photoSelect = photoSelect
}())

//<i class="f-selected">2</i> <div class="item-wrap"></div>