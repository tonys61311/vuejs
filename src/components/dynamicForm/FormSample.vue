<template>
  <div class="FormSample">
  <h1>你爺爺</h1>
    <div v-for="(item,index) in myTest" :key="index">
    分頁 :  {{index}}
      <FormMom :onepage="item" :key="item.id"> </FormMom>
    </div>
  </div>
</template>

<script>
import FormMom from './FormMom'

export default {
  name: 'FormSample',
  components: {
      FormMom
  },
  data () {
    return {
    }
  },
  computed:{
      myTest(){
          return this.$store.state.dynamicFormModule.pageFieldState ;
      },

  }
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
