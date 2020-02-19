<template>
  <div id="app">
    <keep-alive exclude="Detail"> 
       <!-- keep-alive 组件保留状态，或避免重新渲染 -->
      <router-view />
    </keep-alive>
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "./components/content/mainTabbar/MainTabBar";

export default {
  name: "app",
  components: {
    MainTabBar
  }
};
</script>

<style>
@import "./assets/css/base.css";
/* #app { */
/* width: 100vw;
  height: 100vh; */
/* overflow:hidden */

/* position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden; */
/* } */
</style>
