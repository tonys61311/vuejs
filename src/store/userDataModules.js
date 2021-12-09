// 登入後取得的使用者資料
// import axois from 'axios'
import router from "../router/index.js" // 要在vuex裡切換路由一定要加!!!!!

export default ({
    namespaced: true, // !!!!一定要加
    state: {
        userData:{},
    },
    mutations: {
        LOGIN(state , payload){ // 登入後 塞資料
            state.userData=payload ;
        }

    },
    actions: {
        login(context , {userReq ,isSuccess}){
            context.commit('LOGIN',userReq)
            // 登入狀態可能需要改存 cookie 或 localStorage
            if(isSuccess){ 
                context.commit('LOGINSTATE',true, {root: true}) // 更新登入狀態 有登入
                router.push('/dynamicform') // 成功後跳轉route
            }else{ 
                context.commit('LOGINSTATE',false, {root: true}) // 更新登入狀態 無登入
            }
            


        }
    },

  })