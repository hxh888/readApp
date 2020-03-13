<template>
  <div id="app">
    <transition >
      <router-view></router-view>
      <!-- <router-view/> -->
    </transition>
    <v-footer :fActive="fActive"></v-footer>
  </div>
</template>

<script>
import vFooter from './components/common/Footer'
export default {
  name: 'App',
  data(){
    return{
      fActive:0,
      transitionName:'slideleft'
    }
  },
  components:{
		vFooter
  },
  watch:{
    $route(){
      if(this.$router.isleft){
        this.transitionName = 'slideleft'
      }else if(this.$router.isright){
        this.transitionName = 'slideright'
      }

      if(this.$route.path.indexOf("/bookshelf")>-1){
        this.fActive = 0
      }else if(this.$route.path.indexOf("/bookCity")>-1){
        this.fActive = 1
      }else if(this.$route.path.indexOf("/member")>-1){
        this.fActive = 2
      }else if(this.$route.path.indexOf("/listeningToBooks")>-1){
        this.fActive = 3
      }else if(this.$route.path.indexOf("/mine")>-1){
        this.fActive = 4
      }
    },
    
  },
  mounted(){
    // this.initData();
  },
  methods:{
    // initData(){
    //   if(this.$route.path.indexOf("/listeningToBooks")>-1){
    //     this.fActive = 3
    //   }
    // }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  font-size:75px;
}
.Router {
  position: absolute;
  top: 160px;
  left: 0;
  right: 0;
  width: 100%;
  transition: all .5s ease;
  -webkit-transition: all .5s ease;
  -moz-transition: all .5s ease;
  z-index:0;
}
.slideleft-enter,
 .slideright-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.slideleft-leave-active,
.slideright-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
</style>
