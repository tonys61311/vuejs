<template>
  <div class="Login">

  測試: 登入成功後跳轉功能<br>
  1. 登入成功後值是否寫入store(OK)<br>
  2. 成功後是否重新跳轉(OK)<br>
  <div class="red">-要在store內跳轉, 需引入route EX: import router from "../router/index.js"</div>
  3. 於App.vue中 加入loading遮罩 於store的最父層加入 isLoading 統一管理(錯誤訊息彈窗應該也是一樣作法?)


  <button type="button" class="btn btn-success" @click="login(true)">按我登入成功(寫入資料看store)</button>
  <button type="button" class="btn btn-danger" @click="login(false)">按我登入失敗</button>

  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref, reactive, toRefs, watch } from 'vue'
import { useRouter, useRoute } from "vue-router";

export default {
  name: 'Login',

  // 組合式API
  setup(props,context){
    const store = useStore() ;
    const router = useRouter();
    const route = useRoute();

    const login = (isSuccess)=>{
        
        // store.dispatch("loading" ,  true  ) // loading遮罩 打開


            var userReq ;
            if(isSuccess){
                userReq = {
                    "userName" : "天兵",
                    "email":"sos@gmail.com"
                }
            }else{
                userReq = {}
            }
            store.dispatch("userDataModules/login" ,  {userReq ,isSuccess}  )
            
            // store.dispatch("loading" ,  false  ) // loading遮罩 關閉

            

    }

    return {
      login,

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
