import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'

import filters from './filters'
import validators from './validators'
import routerMap from './routers'

import {
	setInterceptors, setAuth
}
from './libs/set'

import App from './components/App'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueValidator);

//实例化Vue的filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));
//实例化Vue的validator
Object.keys(validators).forEach(k => Vue.validator(k, validators[k]));

//实例化VueRouter
let router = new VueRouter({
	hashbang: true,
	history: false,
	linkActiveClass: 'selected',
	transitionOnLoad: true
});

//全局配置http resource
//设置http拦截器
setInterceptors();
//POST默认请求方式是request payload，这里改成application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;
//每次请求传入Authorization
setAuth();

//开启调试
if (process.env !== 'production') {
	Vue.config.debug = true;
}

//注册路由
routerMap(router);

//启动APP
router.start(App, 'body');