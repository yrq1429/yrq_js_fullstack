import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/views/About'
import Dashboard from '@/views/Dashboard'
import Login from '@/views/Login'
import Loginout from '@/views/Loginout'
import auth from '@/auth/index.js'
Vue.use(Router)
const requireAuth = (to, from, next) => {
  console.log(to, from); 
  // 用户有登录？
   if (!auth.loggedIn()) {
    next({
            path: '/login',
            query: {
              redirect: to.fullPath
            }
    })
  }
  next();
}
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/about'
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/loginout',
      component: Loginout
    },
    {
      path: '/dashboard',
      component: Dashboard,
      beforeEnter: requireAuth
    }
  ]
})
