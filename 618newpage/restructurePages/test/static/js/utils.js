/***** 工具方法 *****/
var UTILS = {
    kalert: function(content, callback, title){
        content = content || ''
        callback = callback || function(){}
        title = '提示'
    
        var html = '<div class="k-alert"><div class="alert-container"><div class="title">'+ title +'</div><div class="content">'+ content +'</div><button class="btn confirm">确定</button></div></div>'
    
        $('body').append(html)
    
        $('.k-alert').fadeIn(300)
    
        $('body').on('click','.k-alert .confirm',function(e){
            $(this).parents('.k-alert').fadeOut(300,function(){
                this.remove()
                callback()
            })
        })
    },
    toast: function(content, timeout){
        content = content || ''
        timeout = timeout || 2000
    
        var html = document.createElement('div')
        html.className = 'toast'
        html.innerHTML = content
        $('body').append(html)
    
        $('.toast').fadeIn(300)
    
        setTimeout(function(){
            $(html).fadeOut(300,function(){
                this.remove()
            })
        },timeout)
    }
}