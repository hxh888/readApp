<template>
    <div class="footer">
            <van-tabbar route>
                <van-tabbar-item to="/bookshelf" :class="fActive == 0 ? 'iconfont icon-shujia van-tabbar-item--active':'iconfont icon-shujia'">书架</van-tabbar-item>
                <van-tabbar-item to="/bookCity" :class="fActive == 1 ? 'iconfont icon-book-city-fill van-tabbar-item--active':'iconfont icon-book-city-fill'">书城</van-tabbar-item>
                <van-tabbar-item to="/member" name="member" :class="fActive == 2 ? 'iconfont icon-huiyuan van-tabbar-item--active':'iconfont icon-huiyuan'">会员</van-tabbar-item>
                <van-tabbar-item to="/listeningToBooks" name="listeningToBooks" :class="fActive == 3 ? 'iconfont icon-tingshu van-tabbar-item--active':'iconfont icon-tingshu'">听书</van-tabbar-item>
                <van-tabbar-item to="/mine" name="mine" :class="fActive == 4 ? 'iconfont icon-wodedangxuan van-tabbar-item--active':'iconfont icon-wodedangxuan'" >我的</van-tabbar-item>
            </van-tabbar>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data () {
        return {
            active:false,
        }
    },
    props:{
        fActive:Number
    },
    watch:{
    },
    mounted(){
    },
    methods:{
    }
}
</script>
<style scoped>
.footer{
    /* background:#333; */
}
.active{
    color:red;
}
</style>
