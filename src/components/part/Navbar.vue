<template>
<!--白-->

  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">
        <router-link to='/dynamicform' class="nav-link link" >
          動態表單
        </router-link>
    </el-menu-item>
    <el-menu-item index="2">
        <router-link to='/othertest' class="nav-link link" >
          其他測試
        </router-link>
    </el-menu-item>
    <el-menu-item index="3">
        <router-link to='/login' class="nav-link link" >
          登入頁面TEST
        </router-link>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
  </el-menu>
  <!--<div class="line"></div>  底線畫面--> 
<!--黑-->
<!--  
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1">
        <router-link to='/dynamicform' class="nav-link" >
          動態表單
        </router-link>
    </el-menu-item>
    <el-menu-item index="1">
        <router-link to='/othertest' class="nav-link" >
          其他測試
        </router-link>
    </el-menu-item>
    <el-menu-item index="1">
        <router-link to='/login' class="nav-link" >
          登入頁面TEST
        </router-link>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理 ???</a></el-menu-item>
  </el-menu>
-->    
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref, reactive, toRefs, watch } from 'vue'

export default {
  name: 'navbar',
  props: {
    msg: String
  },
  setup(props,context){
      const store = useStore() ;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration : none ;
}
</style>
