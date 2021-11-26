import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import axios from '@/util/axiosUtil' // 請求API(+攔截器)
import VueAxios from 'vue-axios';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App)
app.use(VueAxios, axios);
installElementPlus(app)
app.use(store).use(router).mount('#app')

// 控管登入
router.beforeEach((to, from, next) => {

    console.log('to',to,'from',from,'next',next)

    if(to.meta.requiresAuth){ // 要登入才能看的頁面 (設定參考router/index.js)
        // 可能打API check登入狀態??
       if(store.state.isLogin == false){ 
            next('/login'); // 非登入狀態 -> 導去登入頁
        }else{
            next(); // 批准你去下一頁
        }
        
    }else{
        next(); // 批准你去下一頁
    }

})