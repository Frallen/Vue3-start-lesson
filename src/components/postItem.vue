<template>
  <div class="post-item">
    <div>
      <h3 @click="$router.push(`/post/${post.id}`)">{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
    <!--
    По нажатию на крестик(свг) я передаю в родительский компонент тот пост по котрому был клик
    -->
    <svg
      @click="$emit('remove', post)"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      style="fill: #000000"
    >
      <path
        d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: "postItem",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.post-item {
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 4px 2px #eee;
  display: flex;
  justify-content: space-between;
  svg {
    cursor: pointer;
  }
}
h3 {
  cursor: pointer;
}
.post-item:first-child {
  margin-top: 0;
}
</style>
