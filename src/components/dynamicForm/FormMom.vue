

<template>
  <div class="FormMom">
  我是老母
  <components :is="textPart"></components>

   <!--<component v-for="item in pageData"
    :key="item.id"
    :is="item.type"
    :onedata="item"
    >
   </component>
-->

<!--<textPart></textPart>-->



---------------------------------------------------
  </div>
</template>

<script>
// import textPart from './element/textPart'
// import textPart2 from './element/textPart2'
import * as itemElements from './element/itemTest'

export default {
  name: 'FormMom',
  components: itemElements,
  // components:{
  //   textPart,

  // },
  props: ['onepage'],
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
