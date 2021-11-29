import axios from 'axios'
import store from '@/store/index.js'

const instance = axios.create({
    retry:2, // 設定請求的次數
    retryDelay : 1000, // 設定請求的間隙(ms)
    timeout: 5000,  // 超时时间
    headers: { "Content-Type": "application/json;charset=UTF-8" },
    

})


// axios.defaults.retry = 2; // 設定請求的次數
// axios.defaults.retryDelay = 1000; // 設定請求的間隙(ms)
// axios.defaults.timeout = 5000 //  超时时间
// axios.defaults.headers = { "Content-Type": "application/json;charset=UTF-8" },

instance.interceptors.request.use(
    (confing) => {
      console.log('攔截請求');
      console.log(confing)
      return confing;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
instance.interceptors.response.use(
    (response) => {
      console.log('攔截回應');
      return response;
    },
    (err) => {
        if (err && err.response) {
            switch (err.response.status) {
              case 400:
                err.message = '請求錯誤'
                break
              case 401:
                err.message = '未授權，請登入'
                break
              case 403:
                err.message = '拒絕訪問'
                break
              case 404:
                err.message = `請求地址出錯: ${err.response.config.url}`
                break
              case 408:
                err.message = '請求超時'
                break
              case 500:
                err.message = '伺服器內部錯誤'
                break
              case 501:
                err.message = '服務未實現'
                break
              case 502:
                err.message = '閘道器錯誤'
                break
              case 503:
                err.message = '服務不可用'
                break
              case 504:
                err.message = '閘道器超時'
                break
              case 505:
                err.message = 'HTTP版本不受支援'
                break
              default:
            }
            if (err.response.status === 401) {
              var config = err.config
              // If config does not exist or the retry option is not set, reject
              if (!config || !config.retry) return Promise.reject(err)
              // Set the variable for keeping track of the retry count
              config.__retryCount = config.__retryCount || 0
              // Check if we've maxed out the total number of retries
              if (config.__retryCount >= config.retry) {
                // Reject with the error
                return Promise.reject(err)
              }
              // Increase the retry count
              config.__retryCount += 1
        
              // Create new promise to handle exponential backoff
              var backoff = new Promise(function(resolve) {
                /* setTimeout(function () {
                            resolve();
                        }, config.retryDelay || 1); */
                // 利用重新整理Token代替間隔週期
                getToken(function(token) {
                  if (token.access_token) {
                    config.headers.Authorization = 'bearer ' + token.access_token
                  }
                  resolve()
                })
              })
              // Return the promise in which recalls axios to retry the request
              return backoff.then(function() {
                return instance(config) // 返回的請求若正常還回到最初請求的響應
                // .then(function (response) {
                //     if (this.debug) console.log(response.data);
                //     if (this.debug) console.log(response.status);
                //     if (this.debug) console.log(response.statusText);
                //     if (this.debug) console.log(response.headers);
                //     if (this.debug) console.log(response.config);
                //     return Promise.resolve();
                // });
                // 開啟另一請求，則會關閉當前攔截效果
                /* return getToken(function (token) {
                            if (token.access_token) {
                                config.headers.Authorization = "bearer " + token.access_token;
                            }
                            return axios(config)
        
                        }); */
              })
            }
          }
          console.log(err)
          return Promise.reject(err.message)
    }
);

/**
 * 請求Token
 * @param {*} callback 請求成功回撥
 * @param {*} user token請求引數，登入資訊
 */
function getToken(callback, user) {
    var srcwin = window.opener || window.parent
    srcwin.postMessage('SUBSYS.ADMIN|GetToken', '*')
  
    setTimeout(function() {
      if (callback) {
        const obj = storeHelper.getStorageObject()
        // console.log('wandan')
        // console.log(obj)
        if (obj && obj.tokenInfo) {
          instance.defaults.headers.common['Authorization'] = 'bearer ' + obj.tokenInfo.access_token
          return callback(obj.tokenInfo)
        }
      }
    }, 2000)
    return
    // ---------------------
  }
  instance.install = (Vue) => {
    Vue.prototype.$http = instance
    Vue.prototype.$getToken = getToken
    Vue.prototype.$mystore = storeHelper
  }

  export default instance;

// 全域攔截 :  https://nighthree.github.io/2020/08/19/2020-08-19-vue%E7%9A%84axios%E6%94%94%E6%88%AA%E5%99%A8/

// 超時請求 參考 : https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/204094/

// axios封裝參考2(目前主要用這個) : https://www.itread01.com/content/1541730913.html
// axios封裝參考3 :https://www.itread01.com/content/1541730872.html