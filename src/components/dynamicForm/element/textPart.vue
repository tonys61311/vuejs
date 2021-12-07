<template>
  <div class="textPart">

   <!-- <p>{{oneData.title}}</p>
    <input type="text" v-model="onlyVal"  >
    <div class="red" :class="{ show: !oneData.isErr }">{{oneData.errMsg}}</div> -->

    <p>{{oneData.title}}</p>
    <input type="text" v-model="oneData.val" :disabled="!oneData.disable"  >
    <div class="red" :class="{ show: !oneData.isErr }">{{oneData.errMsg}}</div>

    

  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref, reactive, toRefs, watch } from 'vue'

export default {
  name: 'textPart',
  props: ['onedata','nowpage'] ,
  // 組合式API
  setup(props,context){
    const store = useStore() ;

    const oneData=reactive(props.onedata)

    // watch寫法 參考文章
    // https://www.jb51.net/article/216715.htm
    const watchFunc = watch(oneData,oneData=>{

      var test = {
        'page':props.nowpage ,
        'data':oneData
      }

      store.dispatch("dynamicFormModule/changeVal" ,  test  )
      
    })

    return {
      oneData,

    }
    
  },
  // 選項式API
  // data () {
  //   return {
  //     oneData:this.onedata,
  //     onlyVal:this.onedata.val
  //   }
  // },
  // watch:{
  //   onlyVal:function(){
  //     // var vm = this ;
  //     // this.oneData.val = this.onlyVal ;
  //     // 改值需到store內改
  //     this.oneData.val = this.onlyVal ;
  //     var test = {
  //       'page':this.nowpage ,
  //       'data':this.oneData
  //     }

  //     this.$store.dispatch("dynamicFormModule/changeVal" ,  test  )

      
  //   }
  // }
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
