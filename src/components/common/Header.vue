<template>
    <div class="header">
        <van-nav-bar title="" fixed>
            <!-- <van-icon name="search" slot="title" /> -->
            <div slot = "title">
                <van-search
                    v-model="searchVal"
                    placeholder="请输入搜索关键词"
                    show-action
                    shape="round"
                    background="rgba(0,0,0,0)"
                    >
                    <i class="iconfont icon-biaoshilei_saoma" slot="right-icon"></i>
                    <i class="iconfont icon-sousuo" slot="left-icon"></i>
                    <i class="iconfont icon-bofangyinle" slot="action"></i>
                </van-search>
            </div>
        </van-nav-bar>
    </div>
  
</template>

<script>
export default {
    name: 'Footer',
    data () {
        return {
        searchVal:""
        }
    },
    watch:{
    },
    mounted(){
        this.initData()
    },
    methods:{
        initData(){
            if(this.$route.params.active){
                this.active = true
            }else{
                this.active = false
            }
        }
    }
}
</script>
<style scoped>

</style>
