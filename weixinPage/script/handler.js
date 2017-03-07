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
        var code = $('#discountCode').val(),
            apiValidate = '/api/1.0/coupon/validate',
            url = './result.html?code='+code+'&status=';

        var d = {
            'coupon_code':code
        }

        var finalData = JSON.stringify(d);

        $.ajax(apiValidate,{
            'data': finalData,
            'type': 'POST',
            'processData': false,
            'contentType': 'application/json',
            'success': function(data){
                console.log(data)
                if(data.request_result.code == 0){
                    if(data.data.coupon){
                        if(data.data.info==''){
                            url += 'ok'+'&school='+data.data.coupon.school_code+'&verify='+data.data.coupon.verify_code+'&info=ok';
                        }else{
                            url += 'ok'+'&school='+data.data.coupon.school_code+'&verify='+data.data.coupon.verify_code+'&info=err';
                        }
                    }else{
                        url += 'err';
                    }
                }else{
                    url += 'err';
                }
                window.location.href=url;
            }
        })
    })
})();