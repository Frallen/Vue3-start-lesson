<template>
  <div class="container">
    <h3>Текущие посты</h3>
    <div class="menu">
      <greenbutton @click="showDialog">Добавить новые посты</greenbutton
      ><Select v-model="selectedSort" :options="sortedOption"></Select>
    </div>
    <preloader v-if="isLoading"></preloader>
    <PostList v-else @remove="removePost" :posts="sortedPosts"></PostList>

    <modal v-model:show="visibleModal"
      ><PostForm @create="createPost"></PostForm
    ></modal>
  </div>
</template>

<script>
//Импортирую компоненты
import PostList from "@/components/postList";
import PostForm from "@/components/form";
import preloader from "@/components/ui/preloader";
import Select from "@/components/ui/select";
import axios from "axios";
export default {
  //регистрирую импортированные компоненты
  components: {
    PostList,
    PostForm,
    preloader,
    Select,
  },
  data() {
    return {
      posts: [],
      visibleModal: false,
      isLoading: true,
      selectedSort: "",
      sortedOption: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержимому" },
      ],
    };
  },
  //вотч мутирует и создает движ при каждом изменении модели
  watch: {
    // МОДЕЛЬ === ПЕРЕМЕННАЯ
    //привязка к модели в data
    //т.е делаем функцию с таким же названием как у переменной
    /*selectedSort(val) {
      //эта функция будет возвращать такое же значение что и переменная в data
      this.posts.sort((post1,post2)=>{
        //сравнение одного поста другим по названию или описанию
        return post1[val]?.localeCompare(post2[val])
      })
    },*/
  },
  //вызывается только при изменении зависимости в computed
  // computed запоминает результат фильтрации, как кэширование
  computed:{
    //вызывать эту функцию не надо, она используется как обычная переменная
    //:posts="sortedPosts"
    sortedPosts(){
      return[...this.posts].sort((post1,post2)=>{
        //сравнение одного поста другим по названию или описанию
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      })
    }
  }
  ,
  methods: {
    showDialog() {
      this.visibleModal = true;
    },
    createPost(data) {
      this.posts.push(data);
      this.visibleModal = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    async fetchPosts() {
      try {
        this.isLoading = true;
        let data = await axios
          .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
          .then((resp) => resp.data);
        this.posts = data;
      } catch (e) {
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
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
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
