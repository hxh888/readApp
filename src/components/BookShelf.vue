<template>
    <div class="bookShelf">
        <div class="shelfHeader">
            <van-row>
                <van-col span="18">本周已读<strong>50</strong>分钟&nbsp;|&nbsp;听书<strong>50</strong>分钟</van-col>
                <van-col span="6">
                    <div class="icon">
                        <i class="iconfont icon-bofangyinle"></i>
                        <i class="iconfont icon-sousuo"></i>
                        <i class="iconfont icon-add"></i>
                    </div>
                </van-col>
            </van-row>
        </div>
        <div class="shelfCard">
            <div class="cardTop">
                <van-row>
                    <van-col span="4">
                        <img src="../assets/images/card.jpg"/>
                    </van-col>
                    <van-col span="20" class="pl">
                        <h3>最爱沈石溪</h3>
                        <p>讲述狼群，最原始的家族生活。混搭过生活</p>
                    </van-col>
                </van-row>
            </div>
            <div class="cardBottom">
                <van-row>
                    <van-col span="15" class="bord">
                        点我领取10金券福利
                    </van-col>
                    <van-col span="9">
                        <i class="iconfont icon-jinbi">签到</i>
                    </van-col>
                </van-row>
                <!-- <span>&nbsp;&nbsp;&nbsp;<strong>|</strong>&nbsp;&nbsp;&nbsp;<i class="iconfont icon-huangguan">签到</i></span> -->
            </div>
        </div>
        <div class="books">
            <van-row gutter="30">
                <van-col span="8">
                    <img src="../assets/images/1.jpg">
                </van-col>
                <van-col span="8">
                    <img src="../assets/images/1.jpg">
                </van-col>
                <van-col span="8">
                    <img src="../assets/images/1.jpg">
                </van-col>
                <van-col span="8">
                    <img src="../assets/images/1.jpg">
                </van-col>
                <van-col span="8">
                    <img src="../assets/images/1.jpg">
                </van-col>
                <van-col span="8">
                    <img src="../assets/images/1.jpg">
                </van-col>
                <van-col span="8">
                    <img src="../assets/images/1.jpg">
                </van-col>
                <van-col span="8">
                    <img src="../assets/images/1.jpg">
                </van-col>
                <van-col span="8">
                    <img src="../assets/images/1.jpg">
                </van-col>
            </van-row>
            <span>加入更多</span>
        </div>
        <!-- <v-footer :fActive="fActive"></v-footer> -->
    </div>
</template>

<script>
export default {
    name: 'BookShelf',
    data () {
        return {
        }
    },
    mounted(){
        this.initData();
    },
    methods:{
        initData(){
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bookShelf{ padding:0 20px;  padding-bottom:180px;}
.shelfHeader{ width:95%; margin:0 auto; padding:10px 0; line-height:60px; font-size:30px; text-align:left; }
.shelfHeader strong{ font-size:45px; }
.icon{  text-align: right; }
.icon i{ font-size:40px; margin:0 2px; }
.shelfCard{ width:95%; box-sizing:border-box; padding:40px 50px;
    box-shadow:0 0 20px rgba(0, 0, 0, .1); border-radius:15px; margin:0 auto; margin-top:20px; }
.cardTop{  text-align: left; padding-bottom:20px; border-bottom: 2px solid #eee; }
.cardTop .pl{padding-left:40px;}
.cardTop h3{font-size:36px; line-height:436x;font-weight:100;}
.cardTop p{font-size:24px; color:#666; width:100%; height:40px; line-height:40px; padding-top:10px;
white-space:nowrap; overflow: hidden; text-overflow: ellipsis;}
.shelfCard img{ display: block; width:100%; }
.cardBottom{ font-size:26px; padding-top:30px; line-height:50px; }
.cardBottom .bord{ position: relative; }
.cardBottom .bord::after{ position: absolute; content: ""; width:2px;
    height:50px; bottom:10px; right:0; background:#eee; }
.cardBottom strong{ font-size:50px; font-weight: 100; }
.cardBottom i::before{ font-size:36px; margin-right:15px; }
.books{width:100%; overflow: hidden; margin-top:50px;}
.books .van-col{padding:20px 20px; box-sizing: border-box;}
.books span{font-size:30px; color: cornflowerblue}
</style>
