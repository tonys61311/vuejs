<template>
  <div class="SwitchItem">

  {{oneData.title}} : 
    
    <el-switch
    v-model="oneData.val"
    active-color="#13ce66"
    inactive-color="#ff4949"
    @change="choose"
    >
    </el-switch>


    <!--<p>{{oneData.title}}</p>
    <input type="text" v-model="oneData.val"  >
    <div class="red" :class="{ show: !oneData.isErr }">{{oneData.errMsg}}</div>-->

    

  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref, reactive, toRefs, watch } from 'vue'

export default {
  name: 'SwitchItem',
  props: ['onedata','nowpage'] ,
  // 組合式API
  setup(props,context){
    const store = useStore() ;

    const oneData=reactive(props.onedata)


    // 選擇選項
    const choose = () => {
      
      var test = {
        'page':props.nowpage ,
        'data':oneData
      }
      store.dispatch("dynamicFormModule/changeVal" ,  test  )
    }



    return {
      oneData,
      choose
    }
    
  },
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
