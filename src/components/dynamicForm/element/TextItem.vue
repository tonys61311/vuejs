<template>
  <div class=" center d-flex align-items-center justify-content-center">

    <div>輸入框:</div>
    <div class='w100'>
        <el-input
        placeholder="请输入内容"
        v-model="oneData.val"
        :disabled="oneData.disable"
        @focusout="changeData">
        </el-input>
        <div class="red" :class="{ show: !oneData.isErr }">{{oneData.errMsg}}</div>
    </div>



    <!--<p>{{oneData.title}}</p>
    <input type="text" v-model="oneData.val"  >
    <div class="red" :class="{ show: !oneData.isErr }">{{oneData.errMsg}}</div>-->

    

  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref, reactive, toRefs, watch } from 'vue'

export default {
  name: 'TextItem',
  props: ['onedata','nowpage'] ,
  // 組合式API
  setup(props,context){
    const store = useStore() ;

    const oneData=reactive(props.onedata)

    // // watch寫法 參考文章
    // // https://www.jb51.net/article/216715.htm
    // const watchFunc = watch(oneData,oneData=>{

    //   var test = {
    //     'page':props.nowpage ,
    //     'data':oneData
    //   }
    //   store.dispatch("dynamicFormModule/changeVal" ,  test  )
    // })

    const changeData = ()=>{
        console.log(oneData.val)
        var test = {
          'page':props.nowpage ,
          'data':oneData
        }
        store.dispatch("dynamicFormModule/changeVal" ,  test  )
    }

    return {
      oneData,
      changeData

    }
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.red{
    color: red 
}

.show{
  display:none
}

.w100{
    width:30%
}

.center{
    margin: 0 auto,
    text-align：center
}


</style>
