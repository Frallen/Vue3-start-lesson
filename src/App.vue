<template>
  <div class="app">
    <navbar></navbar>
    <!-- виртуальный роутинг-->
    <router-view> </router-view>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
export default {
  name: "main",
  components: { navbar },
};
</script>

<style lang="less">
//scoped для стилей если хотим сделать стили только для компонента
@import "modern-normalize/modern-normalize.css";
html {
  font-size: 16px;
}
ul {
  padding: 0;
  margin: 0;
  li {
    list-style-type: none;
  }
}
.container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1vw;
}
</style>
