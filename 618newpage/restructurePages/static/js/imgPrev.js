;(function(){
    var html = '<div class="img-prev-con"><div class="img-prev-close"></div><img class="img-prev"/></div>'

    $('.img-con').on('click','.img-item img',function(e){
        var thisImgSrc = this.src

        if($('.img-prev-con').length <= 0){
            $('body').append(html)
        }

        $('.img-prev').attr('src',thisImgSrc)

        if(window.innerHeight<$('.img-prev')[0].naturalHeight){
            $('.img-prev').css({
                width: 'auto',
                height: '100%'
            })
        }else{
            $('.img-prev').css({
                width: '100%',
                height: 'auto'
            })
        }

        $('.img-prev-con').fadeIn()
    })

    $('body').on('click','.img-prev-con',function(){
        $(this).fadeOut()
    })
})()