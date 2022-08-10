<template>
  <div class="post-list">
    <h2>Посты</h2>
    <PostItem
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"
    ></PostItem>
    <!--По названию предыдущего $emit передаю в родительский каталог пост который необходимо удалить-->
  </div>
</template>

<script>
import PostItem from "@/components/postItem";
export default {
  name: "postList",
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.post-list {
}
</style>
