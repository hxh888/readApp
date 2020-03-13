<template>
    <div class="register">
        <div class="title">
            <i class="iconfont icon-shu"></i>
            随心读
            </div>
        <div class="registerForm w80">
            <van-field
                v-model="loginForm.user"
                label="手机号："
                placeholder=""
                label-width="80px"
                autocomplete="new-user"
            />
            <van-field
                v-model="loginForm.password"
                label="验证码："
                placeholder=""
                label-width="80px"
                type="password"
                autocomplete="new-password"
            >
                <van-button slot="button" size="small" type="primary" @click="">获取验证码</van-button>
            </van-field>
            <van-button type="primary" size="normal">注 册</van-button>
            <span class="userLogin">账号密码登录</span>
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
    name: 'Register',
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
        initData(){
            // this.loginForm.user=""
            // this.loginForm.password=""
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register{
    width: 100%;
    height:100%;
    background:url(../../assets/images/register.jpg) no-repeat;
    background-size: cover;
    color: #fff;
    font-family: qnyy;
    font-weight: bold;
    
}
.register div.title{
    text-align:center;
    font-size:40px;
    padding-top:30%;
    letter-spacing:10px;
}
.register div.title i{
    display: block;
    font-size:100px;
    margin-bottom:30px;
}
.registerForm{
    padding-top:80px;
}
.registerForm .van-cell{
    font-weight: bold;
    box-sizing: border-box;
    padding:0 20px;
    height:80px;
    line-height:80px;
    border-radius:10px;
    background:rgba(255,255,255,1);
    /* border:2px solid rgba(255,255,255,.8); */
    font-size:32px;
    color:#555;
    margin-bottom:40px;
}
.registerForm .van-cell .van-button{
    width:100%;
    font-size:20px;
    background: #006699c7;
    color:#fff;
    padding:0 15px;
    border-radius:10px;
    height: 50px;
}
.registerForm .van-button{
    height:60px;
    width:50%;
    border-radius:40px;
    background:#006699;
    color: #fff;
    font-size:35px;
    font-family: qnyy;
}
.registerForm .label{
    font-size:30px; 
    line-height:80px;
    font-weight: 100;
    color:rgba(255,255,255,.8);
    font-size:24px;
    margin-top:30px;
}
.registerForm .van-col{
    text-align: center;
}
.registerForm .van-col .iconfont{
    /* color:green; */
    color:rgb(0, 200, 0);
    font-size:50px;
}

.registerForm span.userLogin{
    display: block;
    font-size:24px;
    color:blue;
    margin-top:60px;
}

</style>
