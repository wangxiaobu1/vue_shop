import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login'},
  { path: '/login', component: Login},
  { path: '/home', component: Home}
]

const router = new VueRouter({
  routes
})

//挂在路由守卫
router.beforeEach((to, from, next) => {
  //to将要访问的路径
  //from 从哪个路径跳转来的
  //next 是一个函数，表示放行
  //  next()放行，next('/login')跳转到login页面
  if(to.path === '/login') return next()
  //获取token
  const tonkenstr = window.sessionStorage.getItem('token')
  if(!tonkenstr) return next('/login')
  next()
})

export default router
