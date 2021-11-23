<template>
  <div class="SelectItem">

  下拉選單:

    <el-select v-model="oneData.val" placeholder="请选择" @change="choose">
        <el-option
        v-for="item in onedata.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
    </el-select>


    <!--<p>{{oneData.title}}</p>
    <input type="text" v-model="oneData.val"  >
    <div class="red" :class="{ show: !oneData.isErr }">{{oneData.errMsg}}</div>-->

    

  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref, reactive, toRefs, watch } from 'vue'

export default {
  name: 'SelectItem',
  props: ['onedata','nowpage'] ,
  // 組合式API
  setup(props,context){
    const store = useStore() ;

    const oneData=reactive(props.onedata)

    // // watch寫法 參考文章
    // // https://www.jb51.net/article/216715.htm
    const watchFunc = watch(oneData,oneData=>{

      var test = {
        'page':props.nowpage ,
        'data':oneData
      }

    //   store.dispatch("dynamicFormModule/changeVal" ,  test  )
      
    })

    // 選擇選項
    const choose = (chooseVal) => {
      console.log(chooseVal)
      
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
