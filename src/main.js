import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/fonts/iconfont.css'
import './assets/css/global.css'

import axios from 'axios'
axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http=axios


// axios请求拦截器
axios.interceptors.request.use(config=>{
  // 添加token验证
  config.headers.Authorization=window.sessionStorage.getItem('token')
  // console.log(config);
  return config
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
