<template>
  <div class="textPart2 pink" >
    <slot name="header"></slot>
    <input type="text" v-model="onlyVal">
    <div class="red" :class="{ show: !oneData.isErr }">{{oneData.errMsg}}</div>
  </div>
</template>

<script>
export default {
  name: 'textPart2',
  props: ['onedata'] ,
  data () {
    return {
        oneData:this._props.onedata,
        onlyVal:this._props.val
    }
  },
  methods: {
  },
  created() {
    // console.log('子元件 - 粉')
    // console.log(this._props.onedata)
  },
  watch:{
    onlyVal:function(){
      var vm = this ;
      this.oneData.val = this.onlyVal ;
      // 改值需到store內改
    //   this.$store.dispatch('changeVal' , this.oneData )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pink {
    color: pink ;
}
.red{
    color: red ;
}
.show{
  display:none
}
</style>