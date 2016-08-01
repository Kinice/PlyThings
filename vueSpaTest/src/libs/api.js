'use strict'

var apiPath = '/api/1.0/';

export default {
    /**
     * 发送验证码,
     * method -> POST
     * params: 
     */
	sendVerifyCode: apiPath + 'send_verify_code', 
    /**
     * 用户注册,
     * method -> POST
     * params:  
     *     mobile
     *     password
     */
	userRegister: apiPath + 'user/register', 
    //用户登录
	userLogin: apiPath + 'user/login', 
}