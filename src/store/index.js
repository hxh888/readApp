import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

export default new vuex.Store({
    state:{
        content:"显示的内容",
        num:0
    },
    mutations:{
        //处理状态
        increment(state,playload){
            state.num+=playload.step || 1
        }
    },
    actions:{
        //提交改变后的状态
        increment(context,param){
            context.state.num += param.step
            context.commit('increment',context.state.num)//提交改变后的state.num的值
        },
        incrementStep({state,commit,rootState}){
            if(rootState.num < 100){
                store.dispatch('increment',{//调用increment()方法
                    stop:10
                })
            }
        }
    }
    // 在页面中使用时
    // this.$store.commit('increment',{step:1})
    // 如果需要刷新时保存当前的状态可以使用存储方法如：
    // localStorage.setItem('num',this.$store.state.num)
})