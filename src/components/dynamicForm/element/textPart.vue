<template>
  <div class="textPart">

    <p>{{oneData.title}}</p>
    <input type="text" v-model="onlyVal"  >
    <div class="red" :class="{ show: !oneData.isErr }">{{oneData.errMsg}}</div>

    

  </div>
</template>

<script>
export default {
  name: 'textPart',
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
    // console.log('子元件 - 黑')
    // console.log(this._props.onedata)
    // console.log(this.onedata)
  },
  watch:{
    onlyVal:function(){
      // var vm = this ;
      // this.oneData.val = this.onlyVal ;
      // 改值需到store內改
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

.show{
  display:none
}


</style>
