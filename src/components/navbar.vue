<template>
  <div class="menu">
    <div class="container">
      <div class="menu-container">
        <div class="menu-logo"><router-link to="/"><img src="./ui/img/logo.png" alt="" /></router-link></div>
        <ul class="menu-nav">
          <li @click="$router.push('/posts')">Посты</li>
          <li @click="$router.push('/about')">О нас</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style lang="less" scoped>
.menu {
  background: #fff;
  box-shadow: -1px -2px 7px 3px @green2;

  &-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
  }
  &-logo {
    max-width: 41px;
    max-height: 47px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    li{
      margin-left: 10px;
    }
    a{
      text-decoration: none;
      color: @green;
      font-size: 1em;
    }
    li:first-child{
      margin-left: 0;
    }
  }
}
</style>
