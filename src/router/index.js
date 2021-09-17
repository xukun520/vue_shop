import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
// import axios from 'axios'
import Users from '../components/user/Users.vue'

// 配置请求root path
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [{
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      redirect:'/welcome',
      children:[{path:'/welcome',component:Welcome},{path:'/users',component:Users}],
      // children:[{path:'/user',component:User}]
      
    }
  ]
})
// 挂载router 守卫
router.beforeEach((to,from,next)=>{
  if(to.path==='/login') return next()
  //获取token 进行下一步判断
  const tokenStr=window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()
})

export default router
