

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

<!-- 以下為另一種方法 -->
  <!--<div v-for="item in pageData" :key="item.id">

    <template v-if="item.type ==='textPart' ">
      <textPart :onedata="item" :nowpage="nowpage"></textPart>
    </template>

    <template v-if="item.type ==='textPart2' ">
      <textPart2 :onedata="item" :nowpage="nowpage"></textPart2>
    </template> 

  </div>-->

---------------------------------------------------
  </div>
</template>

<script>
// import textPart from './element/textPart'
// import textPart2 from './element/textPart2'
import * as itemElements from './element/itemTest'

export default {
  name: 'FormMom',
  components:itemElements ,
  // components:{
  //   textPart,

  // },
  props: ['onepage','nowpage'],
  data () {
    return {
        pageData:this.onepage,
    }
  },
  computed:{


  },
  created() {
    // console.log('母元件')
    // console.log(this.onepage)
    // console.log(textPart)
      
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
