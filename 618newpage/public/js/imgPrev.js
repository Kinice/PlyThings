;(function(){
    var html = '<div class="img-prev-con"><span class="img-prev"></span></div>'

    $('.img-con').on('click','.img-item img',function(e){
        var thisImgSrc = this.src

        if($('.img-prev-con').length <= 0){
            $('body').append(html)
        }

        $('.img-prev').attr('style','background-image: url('+thisImgSrc+')')

        $('.img-prev-con').fadeIn()
    })

    $('body').on('click','.img-prev-con',function(){
        $(this).fadeOut()
    })
})()