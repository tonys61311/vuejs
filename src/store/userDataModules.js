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


        }
    },

  })