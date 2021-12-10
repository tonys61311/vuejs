import { createStore } from 'vuex'
import dynamicFormModule from './dynamicFormModule'
import userDataModules from './userDataModules'

export default createStore({
  state: {
    isLoading:false ,
    isLogin:false ,
    dbdata:{},
  },
  mutations: {
    LOADSTATE(state , payload){
      state.isLoading = payload

    },
    LOGINSTATE(state , status){
      state.isLogin = status 
    },
    DBDATAGET(state , payload){
      state.dbdata = payload 
    }
  },
  actions: {
    // 請傳入true或false決定是否要顯示等待遮罩
    loading(context , payload){ 
      context.commit('LOADSTATE',payload)
    }
  },
  modules: {
     dynamicFormModule , // 動態表單
     userDataModules, // 登入後使用者資訊
  }
})
