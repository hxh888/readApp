<template>
    <div class="bookCity">
          <v-header></v-header>
          <div class="shelfRoute">
            <ul>
              <router-link to="/bookCity/bookCitySelected" tag="li">精选</router-link>
              <router-link to="/bookCity/bookCityListen" tag="li">听书节</router-link>
              <router-link to="/bookCity/bookCityBoy" tag="li">男生</router-link>
              <router-link to="/bookCity/bookCityCartoon" tag="li">漫画</router-link>
              <router-link to="/bookCity/bookCityBoutique" tag="li">精品</router-link>
              <!-- <li v-for="(item,index) in routerList" :key="index" @click="toRoute(item)">{{item.title}}</li> -->
            </ul>
          </div>
          <div>
          <transition :name="transitionName">
            <router-view class="Router"></router-view>
          </transition>
          </div>
    </div>
</template>

<script>
import vHeader from './common/Header'
export default {
  name: 'BookCity',
  data () {
    return {
      transitionName:'slideleft',
      routerList:[
        {path:"/bookCity/bookCitySelected",num:0,title:"精选"},
        {path:"/bookCity/bookCityListen",num:1,title:"听书节"},
        {path:"/bookCity/bookCityBoy",num:2,title:"男生"},
        {path:"/bookCity/bookCityCartoon",num:3,title:"漫画"},
        {path:"/bookCity/bookCityBoutique",num:4,title:"精品"},
      ]
    }
  },
  components:{
    vHeader
  },
  watch: {//使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index > from.meta.index){
	    //设置动画名称
        this.transitionName = 'slideleft';
      }else{
        this.transitionName = 'slideright';
      }
    }
  },
  mounted(){
    this.initData();
  },
  methods:{
    initData(){
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shelfRoute{ background: rgb(51, 92, 109);  color:#fff; width:100%; padding:0px 20px 20px; overflow: hidden; position: fixed; top:90px; z-index:99;}
.shelfRoute ul{width:auto; height:50px; line-height:50px; white-space: nowrap; overflow-x:auto;}
.shelfRoute ul li{display:inline-block; line-height:50px; vertical-align: middle; padding:0 10px; margin-right:35px; font-size:30px;}
.shelfRoute ul li.router-link-active{font-size:35px;}
</style>
