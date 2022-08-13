<template>
  <div class="pagination">
    <div
      class="pagination-item"
      :class="{ 'current-page': currentPage === page }"
      :key="page"
      v-for="page in totalPages"
      @click="$emit('changePage',page)"
    >
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
    },
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em 0;
  &-item {
    color: #000;
    border-radius: 10px;
    border: 1px solid #000;
    padding: 12px;
    margin-left: 10px;
  }
  &-item:first-child {
    margin-left: 0;
  }
}
.current-page {
  color: #fff;
  background: #000;
}
</style>
