<template>
    <div class="login">
        <div class="title">随心读</div>
        <div class="loginForm w80">
            <van-field
                v-model="loginForm.user"
                label="账号："
                left-icon="user-o"
                placeholder=""
                label-width="50px"
                autocomplete="new-user"
            />
            <van-field
                v-model="loginForm.password"
                label="密码："
                left-icon="lock"
                placeholder=""
                label-width="50px"
                type="password"
                autocomplete="new-password"
            />
            <van-button type="primary" size="large" @click="toLogin">登 录</van-button>
            <van-button type="primary" size="large" @click="toReginter">注 册</van-button>
            <div class="label">
                ——&nbsp;&nbsp;其他登录方式&nbsp;&nbsp;——
            </div>
            <div class="icon w50" >
                <van-row>
                    <van-col span="6">
                        <i class="iconfont icon-weibo"></i>
                    </van-col>
                    <van-col span="6">
                        <i class="iconfont icon-weixin"></i>
                    </van-col>
                    <van-col span="6">
                        <i class="iconfont icon-duanxiniconx-"></i>
                    </van-col>
                    <van-col span="6">
                        <i class="iconfont icon-qq"></i>
                    </van-col>
                </van-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            loginForm:{
                user:"",
                password:""
            }
        }
    },
    mounted(){
        // this.initData()
    },
    methods:{
        toReginter(){
            this.$router.push("/register")
        },
        toLogin(){
            // this.$router.push("/bookShelf")
            this.$router.push({name:"BookShelf",params:{obj:this.loginForm,active:true}})
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
    width: 100%;
    height:100%;
    background:url(../../assets/images/login.jpg) no-repeat;
    background-size: cover;
    color: #fff;
    font-family: qnyy;
    
}
.login div.title{
    font-size:160px;
    padding-top:30%;
    font-weight: bold;
}
.loginForm{
    padding-top:80px;
}
.loginForm .van-cell{
    box-sizing: border-box;
    padding:0 20px;
    height:80px;
    line-height:80px;
    border-radius:40px;
    background:rgba(255,255,255,.3);
    border:2px solid rgba(255,255,255,.8);
    font-size:32px;
    color:#fff;
    margin-bottom:40px;
}
.loginForm .van-button{
    height:80px;
    border-radius:40px;
    background:rgba(255,255,255,.8);
    color:#006699;
    font-size:35px;
    font-family: qnyy;
}
.loginForm .label{
    font-size:30px; 
    line-height:80px;
    font-weight: 100;
    color:rgba(255,255,255,.8);
    font-size:24px;
    margin-top:40px;
}
.loginForm .van-col{
    text-align: center;
}
.loginForm .van-col .iconfont{
    /* color:green; */
    color:rgb(0, 200, 0);
    font-size:50px;
}

</style>
