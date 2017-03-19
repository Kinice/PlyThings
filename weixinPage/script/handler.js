(function(){
    //Common state define
    var form = {
        coupon_code: '',
        name: '',
        phone: '',
        verify_code: ''
    }
    var state = {
        coupon_code: 0,
        name: 0,
        phone: 0,
        verify_code: 0
    }
    var reg = {
        coupon_code: /^[a-z0-9A-Z]{10}$/,
        name: /^[a-zA-Z\u4e00-\u9fa5]{1,20}$/,
        phone: /^1\d{10}$/,
        verify_code: /^\d{6}$/
    }
    var isSentVcode = false;
    var isChangePhone = false;
    var isCounting = false,
        countDown = 60,
        t;
    var signupApi = '/api/1.0//signup',
        vcodeApi = '/api/1.0/send_vcode';

    var url = './result.html';

    var setTime = function(val){//vcode count
        if(isCounting){
            val.attr('disabled','disabled');
            val.addClass('weui-btn_disabled');
            val.html('剩余'+countDown+'秒');
            countDown--;
            if(countDown<0){
                isCounting = false;
                countDown = 60;
            }
        }else{
            val.removeAttr('disabled');
            val.removeClass('weui-btn_disabled');
            val.html('发送验证码');
            clearTimeout(t);
            return false;
        }
        t = setTimeout(function(){
            setTime(val);
        },1050);
    }
    //send vcode event
    $('#sendVcode').on('click',function(e){
        var phone = $('#phone').val();
        if(reg['phone'].test(phone)){
            var data = JSON.stringify({
                'phone': phone
            })
            $.ajax(vcodeApi,{
                'data': data,
                'type': 'POST',
                'processData': false,
                'contentType': 'application/json',
                'success': function(d){
                    if(d.request_result.code == 0){
                        weui.toast('发送成功',2000);
                        isCounting = true;
                        setTime($('#sendVcode'));
                        isSentVcode = true;
                        isChangePhone = false;
                    }else{
                        weui.alert(d.request_result.display_message)
                    }    
                },
                'error': function(){
                    weui.alert('发送失败！请检查网络环境是否良好')
                }
            });
        }else{
            weui.alert('请输入正确的手机号');
            return false;
        }
    })
    //Change phone after send vcode event
    $('#phone').on('keyup',function(){
        if(isSentVcode){
            isChangePhone = true;
        }
    })
    //Confirm event
    $('#confirm').on('click',function(e){
        var allStates = 0;
        //get form and verify form with reg
        for(var i in form){
            form[i] = $('#'+i).val();
            if(reg[i].test(form[i])){
                state[i] = 1;
                allStates += 1;
            }
            else state[i] = 0;
        }

        if(allStates == 4 && !isChangePhone && isSentVcode){
            form.coupon_code = form.coupon_code.toUpperCase();
            $.ajax(signupApi,{
                'data': JSON.stringify(form),
                'type': 'POST',
                'processData': false,
                'contentType': 'application/json',
                'success': function(d){
                    if(d.request_result.code == 0){
                        window.location.href = url;
                    }else{
                        weui.alert(d.request_result.display_message);
                    }
                },
                'error': function(){
                    weui.alert('验证失败！请检查网络环境是否良好')
                }
            });
        }else{
            if(isChangePhone || !isSentVcode){
                weui.alert('请输入手机号对应的验证码')
            }else{
                for(var i in state){
                    if(state[i]==0){
                        switch(i){
                            case 'coupon_code': weui.alert('请输入正确的邀请码');break;
                            case 'name': weui.alert('请输入正确的姓名');break;
                            case 'phone': weui.alert('请输入正确的手机号');break;
                            case 'verify_code': weui.alert('请输入正确的验证码');break;
                            default: weui.alert('错误！请重新打开页面');break;
                        }
                    }
                }
            }
        }
    })
})();