<template>
  <div class="FormSample">
  <h1>你爺爺</h1>
    <div class="red"> 加入登入控管 (參考main.js的 控管登入) </div>
    <div v-for="(item,index) in myTest" :key="index">
    分頁 :  {{index}}
      <FormMom :onepage="item" :key="item.id" :nowpage="index"> </FormMom>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { reactive , computed } from 'vue'
import FormMom from './FormMom'

export default {
  name: 'FormSample',
  components: {
      FormMom
  },
  setup(){ // render前就會執行
    const store = useStore()
    const myTest=reactive(store.state.dynamicFormModule.pageFieldState)

    return{
      myTest ,
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
.red {
  color: red ;
}
</style>
