// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'

/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
