<template >
    <div class="bookShelfSelected">
      <div class="slider">
        <van-swipe :autoplay="3000">
          <van-swipe-item > <img  src="../../assets/images/slide1.jpg"/> </van-swipe-item>
          <van-swipe-item > <img  src="../../assets/images/slide2.jpg"/> </van-swipe-item>
          <van-swipe-item > <img  src="../../assets/images/slide3.jpg"/> </van-swipe-item>
        </van-swipe>
      </div>
      <div class="box">
        <div class="boxsize"></div>
        <div class="cardIcon clear">
            <!-- <router-link  class="iconfont icon-qiandao2" to="/login"><van-grid-item text="签到"></van-grid-item>签到</router-link>
            <router-link to="/login"><van-grid-item class="iconfont icon-paihang" text="排行"></van-grid-item></router-link>
            <router-link to="/login"><van-grid-item class="iconfont icon-free" text="免费"></van-grid-item></router-link>
            <router-link to="/login"><van-grid-item class="iconfont icon-member_icon" text="会员"></van-grid-item></router-link>
            <router-link to="/login"><van-grid-item class="iconfont icon-zhaopin" text="招聘"></van-grid-item></router-link> -->

            <router-link  class="iconfont icon-qiandao2" to="/login" tag="li"><span>签到</span></router-link>
            <router-link  class="iconfont icon-paihang" to="/login" tag="li"><span>排行</span></router-link>
            <router-link  class="iconfont icon-free" to="/login" tag="li"><span>免费</span></router-link>
            <router-link  class="iconfont icon-member_icon" to="/login" tag="li"><span>会员</span></router-link>
            <router-link  class="iconfont icon-zhaopin" to="/login" tag="li"><span>招聘</span></router-link>
        </div>
        <div>这是精选的内容</div>
        <div>这是精选的内容</div>
        <div>这是精选的内容</div>
        <div>这是精选的内容</div>
        <div>这是精选的内容</div>
        <div>这是精选的内容</div>
        <div>这是精选的内容</div>
        <div>这是精选的内容</div>
        <div>这是精选的内容</div>
        <div>这是精选的内容</div>
      </div>
        

    </div>
</template>

<script>
export default {
  name: 'bookShelfSelected',
  data () {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  },
  components:{
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bookShelfSelected{padding-bottom:160px;}
.slider{padding:20px 40px; height:224px; background: rgb(51, 92, 109);border-radius:0 0 750px/180px 20px;}
.slider img{border-radius:30px;}
.box{background:olivedrab; background:#fff; padding-top:37px;}
.boxsize{background:orange; background:#fff; width:100%; height:40px;}
.cardIcon{padding:0 20px;}
.cardIcon li{width:20%; float:left; font-size:60px;}
.cardIcon li span{display:block; font-size:24px; padding-top:10px; color:#888;}
</style>
