/***** 工具方法 *****/
//alert
function kalert(content, callback, title) {
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
}
//toast
function toast(content, timeout) {
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
/***** selector注册 *****/
var senioritySelect = new MobileSelect({
    trigger: '#select_seniority', 
    title: '钢琴教龄',  
    wheels: [
                {data:[
                    {id: '0',value: '0-2年'},
                    {id: '1',value: '3-5年'},
                    {id: '2',value: '5年以上'}
                ]}
            ],
    position: [0],
    callback: function(indexArr, data){
        $('#seniority')[0].value = data[0].id
    }
});
var genderSelect = new MobileSelect({
    trigger: '#select_gender', 
    title: '钢琴教龄',  
    wheels: [
                {data:[
                    {id: '0',value: '男'},
                    {id: '1',value: '女'}
                ]}
            ],
    position:[0],
    callback: function(indexArr, data){
        $('#gender')[0].value = data[0].id
    }
});
/***** 页面方法 *****/
//发送验证码
$(function () {
    var setValidTime = function (second) {
        if (second < 0) {
            $("#btn-captcha").removeClass('btn-disabled')
                          .removeAttr('disabled')
                          .text('重新获取');
            return;
        }
        $("#btn-captcha").text('剩余(' + second + 's)');
        setTimeout(function(){
            $("#btn-captcha").text('剩余(' + second + 's)');
            second --;
            setValidTime(second);
        }, 1050);
    };

    $("#btn-captcha").click(function (e) {
        e.preventDefault()
        var mobile = $("#mobile").val();
        //请求的url
        var url = 'url';
        //请求的参数
        var params = {
            mobile: mobile
        }

        if(!mobile){
            toast('请输入手机号')
            return
        }
        $.post(url, params, function (res) {
            var res = JSON.parse(res);
            if (res.code == 0) {
                toast('发送成功')
                $("#btn-captcha").addClass('btn-disabled')
                              .attr('disabled', 'disabled');
                setValidTime(60);
            } else {
                kalert(res.message);
            }
        });
    });
});
//输入检测
$('#btn-submit').click(function(e){
    e.preventDefault()
    var form = $('#form')
    var inputs = $('#form input')
    for(var i = 0; i < inputs.length; i++){
        if(inputs[i].id == 'name'){
            if(inputs[i].value == ''){
                toast('请输入真实姓名')
                return
            }
        }
        if(inputs[i].id == 'mobile'){
            if(inputs[i].value == ''){
                toast('请输入手机号')
                return
            }
        }
        if(inputs[i].id == 'captcha'){
            if(inputs[i].value == ''){
                toast('请输入验证码')
                return
            }
        }
        if(inputs[i].id == 'seniority'){
            if(inputs[i].value == ''){
                toast('请选择钢琴教龄')
                return
            }
        }
        if(inputs[i].id == 'gender'){
            if(inputs[i].value == ''){
                toast('请选择性别')
                return
            }
        }
    }
    form.submit()
})
//删除功能
$('.nml-input').on('input propertychange', function(){
    if(this.value.length != 0){
        if($(this).siblings('.clear').length == 0){
            $(this).after('<span class="clear"></span>')
        }
    }else{
        $(this).siblings('.clear').remove()
    }
})
$('.input-con').on('click','.clear',function(){
    $(this).siblings('.nml-input').val('')
    $(this).remove()
})