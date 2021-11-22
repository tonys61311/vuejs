<template>
  <div class="dashBoard">
    <Navbar></Navbar>
    測試用頁面 引入共用function請參考DashBoard.vue
    <router-view></router-view>


  </div>
</template>

<script>
import Navbar from './part/Navbar.vue'
import {testMethod} from '../shareMethod/methods.js'
const { Date_ADtoChina } = testMethod()



export default {
  name: 'dashBoard',
  components:{
      Navbar
  },
  props: {
    msg: String
  },
  setup () {

    // 共用方法 sample 
    var ttt = Date_ADtoChina('2021-11-22');
    console.log(ttt)



    
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
