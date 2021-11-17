<template>
  <div class="textPart2 pink">

    <p class="pink">{{onedata.title}}</p>
    <input type="text" v-model="onlyVal"  >
    <div class="red" :class="{ show: !onedata.isErr }">{{onedata.errMsg}}</div>

    

  </div>
</template>

<script>
export default {
  name: 'textPart2',
  props: ['onedata'] ,
  data () {
    return {
      // oneData:this._props.onedata,
      // onlyVal:this.onedata.val
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

.pink{
    color: pink ;
}

.show{
  display:none
}


</style>
