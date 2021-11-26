import axios from 'axios'
import store from '@/store/index.js'

axios.interceptors.request.use(
    (confing) => {
      console.log('攔截請求');
      console.log(confing)
      store.commit('LOADSTATE',true) // loading 遮罩
      return confing;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
axios.interceptors.response.use(
    (response) => {
      console.log('攔截回應');
      console.log(response)
      store.commit('LOADSTATE',false) // loading 遮罩
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
);
  export default axios;

// 全域攔截 :  https://nighthree.github.io/2020/08/19/2020-08-19-vue%E7%9A%84axios%E6%94%94%E6%88%AA%E5%99%A8/