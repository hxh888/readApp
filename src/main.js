// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {post,get} from './api/http'
import 'amfe-flexible'
import vant from 'vant'
import 'vant/lib/index.css'
import './assets/css/public.css'
import './assets/css/vant.css'
import './assets/css/font.css'
import './assets/iconfont/iconfont.css'
Vue.use(vant)

Vue.config.productionTip = false

Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$api = '/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

window.addEventListener('popstate',function(e){
  router.togoback()
},false)
