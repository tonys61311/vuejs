

<template>
  <div class="FormMom">
  我是老母


  <component v-for="item in pageData"
    :key="item.id"
    :is="item.type"
    :onedata="item"
    :nowpage="nowpage"
    >
  </component>

---------------------------------------------------
  </div>
</template>

<script>
// import textPart from './element/textPart'
// import textPart2 from './element/textPart2'
import { reactive } from 'vue'
import * as itemElements from './element/itemTest'

export default {
  name: 'FormMom',
  components:itemElements ,
  props: ['onepage','nowpage'],

  // 原用法為選項式API
  // setUp 為組合式API
  //引入 setUp 的方法 則不須 methods , watch , computed ,data 因為所有的東西都會被一起包在 setup 裡引用出來
  setup(props,context){

    const pageData=reactive(props.onepage)


    return {
      pageData,

    }

    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
