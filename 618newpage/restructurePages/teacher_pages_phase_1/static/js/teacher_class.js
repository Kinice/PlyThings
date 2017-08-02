;(function(){
    var navItems = $('.g-nav .nav-item'),
        innerItems = $('.class-inner-list .inner-item')
    // outer nav click handler
    $(navItems).click(function(){
        var itemName = this.dataset.title
        if($(this).hasClass('selected-item')) return;
        else{
            //change border
            for(var i = 0; i < navItems.length; i++){
                if($(navItems[i]).hasClass('selected-item')){
                    $(navItems[i]).removeClass('selected-item')
                    break
                }
            }
            $(this).addClass('selected-item')
            //change container
            $('.show-outer').removeClass('show-outer')
            $('#'+itemName).addClass('show-outer')
        }
    })
    // inner nav click handler
    $(innerItems).click(function(){
        var itemName = this.dataset.name
        if($(this).hasClass('selected-inner')) return;
        else{
            //change border
            for(var i = 0; i < innerItems.length; i++){
                if($(innerItems[i]).hasClass('selected-inner')){
                    $(innerItems[i]).removeClass('selected-inner')
                    break
                }
            }
            $(this).addClass('selected-inner')
            //change container
            $('.show-inner').removeClass('show-inner')
            $('#'+itemName).addClass('show-inner')
        }
    })
})()