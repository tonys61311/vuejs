<template>
  <div class="FormSample">
  <!--<h1>你爺爺</h1>-->
  <!--上方頁數導覽-->
    <div class="allPage flex-center flex-row" >
      <div class="onePageItem flex-center" v-for="(item,index) in myTest" :key="index" @click="switchPage(index)"> {{index}} </div>
    </div>

    <div class="red"> 加入登入控管 (參考main.js的 控管登入) </div>
    <div v-for="(item,index) in myTest" :key="index" :class="{displaynone:showPage!=index}" >
    分頁 :  {{index}}
      <FormMom :onepage="item" :key="item.id" :nowpage="index"> </FormMom>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { reactive , computed ,ref} from 'vue'
import FormMom from './FormMom'
import { onMounted } from 'vue'

export default {
  name: 'FormSample',
  components: {
      FormMom
  },
  setup(){ // render前就會執行
    const store = useStore()
    const myTest=reactive(store.state.dynamicFormModule.pageFieldState)
    // 動態取用stroe 需用compute綁定
    const showPage = computed(() => {
      return store.state.dynamicFormModule.nowShowPage
     });

   // 切換頁面 
    const switchPage = (page)=>{
        store.dispatch("dynamicFormModule/switchPage" ,  page  )
    }


    // 一載入要做的事
    onMounted(()=>{
      // loading遮罩 打開
      // store.dispatch("loading" ,  true  ) 
      const firstPage =Object.keys(myTest)[0] ; //  第一頁名稱
      store.dispatch("dynamicFormModule/init" ,  firstPage )
      // showPage = store.state.dynamicFormModule.nowShowPage ;
      // console.log(showPage)
        // setTimeout(() => {
        //     store.dispatch("dynamicFormModule/init" ,  firstPage )
        //     // loading遮罩 關閉
        //     store.dispatch("loading" ,  false  )       
        // }, 2000);

    })


    return{
      myTest ,
      switchPage,
      showPage,

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.red {
  color: red ;
}
.allPage{
  width:100%;
  height:100px ;
  background-color:gray;
}
.onePageItem{
  background-color:pink;
  height:80px;
  width:80px;
  border-radius: 50%;
  text-align:center ;
  margin-right: 10px;
  margin-left: 10px;
}

.flex-center{
  display: flex;
  justify-content: center ;
  align-items: center ;
}

.flex-row{
  flex-direction: row ;
}

.displaynone{
  display:none ;
}

</style>
