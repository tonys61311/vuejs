<template>
  <div class="OtherTest">
    測試用頁面 以下方法請參考OtherTest.vue<br/>
    1.引入共用function<br/>
    2.取得環境變數<br/>
    3.跨域請求參考<br/>
    <router-view></router-view>


  </div>
</template>

<script>
import Navbar from './part/Navbar.vue'
import {testMethod} from '../shareMethod/methods.js'
import axios from '@/util/axiosUtil' // 請求API(+攔截器)
import { onMounted } from 'vue'
import store from '@/store/index.js'

const { Date_ADtoChina } = testMethod()



export default {
  name: 'OtherTest',
  components:{
      Navbar
  },
  props: {
    msg: String
  },
  setup () {

    //取得環境變數方法
    console.log('----取得環境變數----' )
    console.log(process.env)
    // 共用方法 sample 
    console.log('----共用方法 sample ----' )
    var ttt = Date_ADtoChina('2021-11-22');
    console.log(ttt)

    // 跨域請求參考 https://www.796t.com/article.php?id=164189
    console.log('----跨域請求測試----')
    store.commit('LOADSTATE',true) // loading 遮罩
    onMounted(() => { // correctAPI api/try/ajax/json_demo.json
      axios
      .get('api/try/ajax/json_demo.json')
      .then(response => {
        console.log(response.data)
        store.commit('LOADSTATE',false) // loading 遮罩
      })
      .catch(function (error) { // 请求失败处理
        console.log(error);
        store.commit('LOADSTATE',false) // loading 遮罩
      });
    })



    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
