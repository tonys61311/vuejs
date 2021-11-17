import { createStore } from 'vuex'
import dynamicFormModule from './dynamicFormModule'

export default createStore({
  state: {
    isLoading:false ,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
     dynamicFormModule , // 動態表單
  }
})
