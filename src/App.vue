<template>
  <div id="app">

    <!-- 載入中遮罩 ... 再加上圖 -->
    <div :class="{display_none : !isLoad}" class="mask"></div>
      <router-view></router-view>
    
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref, reactive, toRefs, watch } from 'vue'

export default {
  name: 'App',
  setup(props,context){
    const store = useStore() ;

    // 動態取用stroe 需用compute綁定
    const isLoad = computed(() => {
      return store.state.isLoading
     });


    return {
      isLoad,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.mask{
    background-color:rgb(0,0,0);
    opacity:0.3 ;
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:10000;
}

.display_none{
  display:none ;
}

</style>
