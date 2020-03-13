import Vue from 'vue'
import Router from 'vue-router'


Router.prototype.isleft = false
Router.prototype.isright = false

// 需要左方向动画的路由用this.$router.togo('****')
Router.prototype.togo = function (path) {
  console.log(path)
  this.isleft = true
  this.isright = false
  this.push(path)
}
// 需要右方向动画的路由用this.$router.goRight('****')
Router.prototype.goRight = function (path) {
  this.isright = true
  this.isleft = false
  this.push(path)
}
// 需要返回按钮动画的路由用this.$router.goBack()，返回上一个路由
Router.prototype.goBack = function () {
  this.isright = true
  this.isleft = false
  this.go(-1)
}
// 点击浏览器返回按钮执行，此时不需要路由回退
Router.prototype.togoback = function () {
  this.isright = true
  this.isleft = false
}

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


// 在组件中使用的话则使用
// this.$router.goBack()//返回
// this.$router.to('****') //进入到详情

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },{
      path: '/login',//登陆
      name: 'Login',
      component:(resolve) => require(['@/components/user/Login'],resolve)
    },{
      path:'/register',//注册
      name:'Register',
      component:(resolve) => require(['@/components/user/Register'],resolve)
    },{
      path:'/bookShelf',//书架
      name:'BookShelf',
      component:(resolve) => require(['@/components/BookShelf'],resolve)
    },{
      path:'/bookCity',//书城
      name:'BookCity',
      component:(resolve) => require(['@/components/BookCity'],resolve),
      redirect:'/bookCity/bookCitySelected',
      children:[
        {
          path:'/bookCity/bookCitySelected',//精选
          name:'BookCitySelected',
          meta:{index:0},
          component:(resolve) => require(['@/components/bookCity/BookCitySelected'],resolve)
        },{
          path:'/bookCity/bookCityListen',//听书
          name:'BookCityListen',
          meta:{index:1},
          component:(resolve) => require(['@/components/bookCity/BookCityListen'],resolve)
        },{
          path:'/bookCity/bookCityBoy',//男生
          name:'BookCityBoy',
          meta:{index:2},
          component:(resolve) => require(['@/components/bookCity/BookCityBoy'],resolve)
        },{
          path:'/bookCity/bookCityCartoon',//漫画
          name:'BookCityCartoon',
          meta:{index:3},
          component:(resolve) => require(['@/components/bookCity/BookCityCartoon'],resolve)
        },{
          path:'/bookCity/bookCityBoutique',//精品
          name:'BookCityBoutique',
          meta:{index:4},
          component:(resolve) => require(['@/components/bookCity/BookCityBoutique'],resolve)
        }
      ]
    },{
      path:'/listeningToBooks',//男生
      name:'ListeningToBooks',
      component:(resolve) => require(['@/components/ListeningToBooks'],resolve)
    },{
      path:'/member',//会员
      name:'Member',
      component:(resolve) => require(['@/components/Member'],resolve)
    },{
      path:'/mine',//我的
      name:'Mine',
      component:(resolve) => require(['@/components/Mine'],resolve)
    }
  ]
})
