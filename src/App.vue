<template>
  <div class="container">
    <PostList @remove="removePost" :posts="posts"></PostList>
    <PostForm @create="createPost"></PostForm>
  </div>
</template>

<script>
//Импортирую компоненты
import PostList from "@/components/postList";
import PostForm from "@/components/form";
export default {
  //регистрирую импортированные компоненты
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Поможем подобрать мебель под ваш интерьер",
          text: "Используйте наш калькулятор, чтобы подобрать подходящий для вас вариант",
        },
        {
          id: 2,
          title: "Поможем подобрать мебель под ваш интерьер",
          text: "Используйте наш калькулятор, чтобы подобрать подходящий для вас вариант",
        },
      ],
    };
  },
  methods: {
    createPost(data) {
      this.posts.push(data);
    },
    removePost(post) {
      console.log(post)
     this.posts= this.posts.filter((p) => p.id !== post.id);
    },
  },
};
</script>

<style lang="less">
//scoped для стилей если хотим сделать стили только для компонента
@import "modern-normalize/modern-normalize.css";

.container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1vw;
}
</style>
