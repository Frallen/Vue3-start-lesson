<template>
  <input
    class="form-item"
    type="text"
    :value="modelValue"
    @input="updateValue"
  />
</template>

<script>
export default {
  name: "default-input",
  methods: {
    updateValue(data) {

      this.$emit("update:modelValue", data.target.value);
    },
  },
  props: {
    modelValue: [String, Number],
  },
};
</script>

<style lang="less" scoped>
input {
  background: #ffffff;
  border: 1px solid #e1dfde;
  border-radius: 4px;
  padding: 15px 20px;
  outline: none;
  transition: all 0.3s ease;
  display: block;
  font-size: 15px;
  width: 100%;
}
</style>