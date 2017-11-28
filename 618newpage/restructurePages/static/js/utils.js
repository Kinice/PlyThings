/***** 工具方法 *****/
var UTILS = {
    kalert: function(content, callback, title){
        content = content || ''
        callback = callback || function(){}
        title = title || ''
        var html = ''
        if(title !== ''){
            html = '<div class="k-alert"><div class="alert-container"><div class="title">'+ title +'</div><div class="content">'+ content +'</div><button class="btn confirm">确定</button></div></div>'
        }else{
            html = '<div class="k-alert"><div class="alert-container"><div class="content">'+ content +'</div><button class="btn confirm">确定</button></div></div>'
        }
        $('body').append(html)
    
        $('.k-alert').fadeIn(200)
    
        $('body').off('click').on('click','.k-alert .confirm',function(e){
            $(this).parents('.k-alert').fadeOut(200,function(){
                this.remove()
                callback()
            })
        })
    },
    kprompt: function(content, callback, title){
        content = content || ''
        callback = callback || function(){}
        title = title || ''
        var html
        if(title !== ''){
            html = '<div class="k-prompt"><div class="wrapper"></div><div class="alert-container"><div class="title">'+ title +'</div><div class="content">'+ content +'</div><input type="text" id="k-prompt"><button class="btn confirm">确定</button></div></div>'
        }else{
            html = '<div class="k-prompt"><div class="wrapper"></div><div class="alert-container"><div class="content">'+ content +'</div><input type="text" id="k-prompt"><button class="btn confirm">确定</button></div></div>'
        }

        $('body').append(html)

        $('.k-prompt').fadeIn(200)

        $('body').off('click','.k-prompt .wrapper').on('click','.k-prompt .wrapper',function(e){
            $(this).parents('.k-prompt').fadeOut(200,function(){
                this.remove()
            })
        })

        $('body').off('click','.k-prompt .confirm').on('click','.k-prompt .confirm',function(e){
            var final = $('#k-prompt')[0]
            $(this).parents('.k-prompt').fadeOut(200,function(){
                this.remove()
                callback(final)
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