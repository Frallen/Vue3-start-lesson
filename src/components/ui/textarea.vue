<template>
  <textarea :value="modelValue" @input="updateValue"></textarea>
</template>

<script>
export default {
  name: "default-textarea",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateValue(data) {
      this.$emit("update:modelValue", data.target.value);
    },
  },
};
</script>

<style lang="less" scoped>
textarea {
  width: 100%;
  background: #ffffff;
  border: 1px solid #e1dfde;
  border-radius: 4px;
  font-weight: 400;
  font-size: 15px;
  line-height: 170%;
  color: #262626;
  resize: none;
}
</style>
