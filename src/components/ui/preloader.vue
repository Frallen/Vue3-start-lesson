<template>
  <div class="preloader">
    <img src="./img/logo.png" alt="" />
    <h3>LOADING ...</h3>
  </div>
</template>

<script>
export default {
  name: "preloader",
};
</script>

<style lang="less" scoped>
.preloader {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  z-index: 5;
  background: #fff;
  height: 100%;
  width: 100%;
  img {
    animation: rotate 2s linear infinite;
  }
  h3 {
    margin-top: 1em;
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
