<template>
  <div class="post-list">
    <h2>Посты</h2>
    <transition-group name="post-list" >
    <PostItem
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"
    ></PostItem>
    </transition-group>
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
  display: inline-block;
  margin-right: 10px;
}
.post-list-list-active,
.post-list-leave-active {
  transition: all 0.6s ease-in-out;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.post-list-move {
  transition: transform 0.8s ease;
}
</style>
