<template>
  <div class="modal" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="modal-wrapper">
    <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods:{
    hideDialog() {
     this.$emit("update:show",false)
    }
  }
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
  &-wrapper{
    margin: auto;
  }
}

</style>
