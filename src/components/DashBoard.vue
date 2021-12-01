<template>
  <div class="dashBoard">
    <Navbar></Navbar>
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
  name: 'dashBoard',
  components:{
      Navbar
  },
  props: {
    msg: String
  },
  setup () {




    
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
