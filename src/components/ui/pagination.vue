<template>
  <div class="pagination" v-for="page in totalPages" @click="selectedPage">
    <div class="pagination-item" :key="page" @click="">
      {{ page }}
    </div>
  </div>
</template>

<script>
export default {
  name: "pagination",
  data() {
    return {};
  },
  props: {
    totalPages: {
      type: Number,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    selectedPage(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  &-item {
    color: #000;
    border-radius: 10px;
    padding: 12px;
  }
}
</style>
