// 登入後取得的使用者資料
// import axois from 'axios'


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
        login(context , payload){
            context.commit('LOGIN',payload)
            // 登入狀態可能需要改存 cookie 或 localStorage
            if(payload.userName){ 
                context.commit('LOGINSTATE',true, {root: true}) // 更新登入狀態 有登入
            }else{ 
                context.commit('LOGINSTATE',false, {root: true}) // 更新登入狀態 無登入
            }


        }
    },

  })