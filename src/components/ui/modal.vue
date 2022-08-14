<template>
  <div class="modal" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="modal-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Togglemixin from "@/mixins/togglemixin";

export default {
  name: "modal",
  //миксины это переиспользуемые однотипные методы, можно вынести повторяющуюся логику и ипортировать ее
  // при монитровании будет происходить слияние с миксина с копмпонентом
  mixins: [Togglemixin],
};
</script>

<style lang="less" scoped>
.modal {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.5);
  &-wrapper {
    margin: auto;
  }
}
</style>
