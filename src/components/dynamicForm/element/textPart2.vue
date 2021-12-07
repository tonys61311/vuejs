<template>
  <div class="textPart2 pink">

    <p class="pink">{{onedata.title}}</p>
    <input type="text" v-model="onlyVal" :disabled="!oneData.disable" >
    <div class="red" :class="{ show: !onedata.isErr }">{{onedata.errMsg}}</div>

    

  </div>
</template>

<script>
export default {
  name: 'textPart2',
  props: ['onedata','nowpage'] ,
  data () {
    return {
      oneData:this.onedata,
      onlyVal:this.onedata.val
    }
  },
  methods: {

  },
  created() {
    // console.log('子元件 - 粉')
    // console.log(this._props.onedata)
    // console.log(this.onedata)
  },
  watch:{
    onlyVal:function(){
      this.oneData.val = this.onlyVal ;
      var test = {
        'page':this.nowpage ,
        'data':this.oneData
      }

      this.$store.dispatch("dynamicFormModule/changeVal" ,  test  )

      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.red{
    color: red ;
}

.pink{
    color: pink ;
}

.show{
  display:none
}


</style>
