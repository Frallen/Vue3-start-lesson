<template>
  <button class="green-button"><slot></slot></button>
</template>

<script>
export default {
  //имя компонета по которому его можно вызвать
  name: "greenbutton",
};
</script>

<style lang="less" scoped>
button {
  text-decoration: none;
  outline: none;
  border: none;
  width: 100%;
}
</style>
