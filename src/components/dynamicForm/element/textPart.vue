<template>
  <div class="textPart">

    <!--{{oneData.title}}
    <input type="text" v-model="onlyVal"  >
    <div class="red" :class="{ show: !oneData.isErr }">{{oneData.errMsg}}</div> -->

    我柿仔園見!!!
    

  </div>
</template>

<script>
export default {
  name: 'textPart',
  // props: ['onedata'] ,
  data () {
    return {
      // oneData:this._props.onedata,
      // onlyVal:this.onedata.val
    }
  },
  methods: {

  },
  created() {
    console.log('子元件 - 黑')
    // console.log(this._props.onedata)
    // console.log(this.onedata.val)
  },
  watch:{
    onlyVal:function(){
      // var vm = this ;
      // this.oneData.val = this.onlyVal ;
      // 改值需到store內改
    //   this.$store.dispatch('changeVal' , this.oneData )

      
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
