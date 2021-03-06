import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// ===================== Pages Components ======================
import Hello from './components/Hello'
import Test  from './components/test'
import Test2 from './components/test2'
import Test3 from './components/test3'

// ==================== Router registration ====================
export default new Router({
  mode: 'hash',
  routes: [
    { path: '/', component: Hello },
    { path: '/test', component: Test},
    { path: '/test2', component: Test2},
    { path: '/test3', component: Test3}
  ]
})
