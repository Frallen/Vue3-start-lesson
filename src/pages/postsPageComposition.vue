<template>
  <div class="container">
    <h3>Текущие посты</h3>
    <div class="menu">
      ><Select v-model="selectedSort" :options="sortedOption"></Select>
      <default-input v-model="searchQuery"></default-input>
    </div>
    <preloader v-if="isLoading"></preloader>
    <PostList
      v-else
      :posts="sortedSearchedPosts"
    ></PostList>

    <!-- <Pagination
      :current-page="currentPage"
      :totalPages="totalPages"
      @changePage="changePage"
    ></Pagination>-->

  </div>
</template>

<script>
//Импортирую компоненты
import PostList from "@/components/postList";
import PostForm from "@/components/form";
import preloader from "@/components/ui/preloader";
import Select from "@/components/ui/select";
import axios from "axios";
import DefaultInput from "@/components/ui/input";
import Pagination from "@/components/ui/pagination";
import { useSortedPosts } from "@/hooks/useSortedPosts";
import { useSortedAndSearchedPosts } from "@/hooks/useSortedAndSearchPosts";
import { usePosts } from "@/hooks/usePosts";
export default {
  //регистрирую импортированные компоненты
  components: {
    DefaultInput,
    PostList,
    PostForm,
    preloader,
    Select,
    Pagination,
  },
  data() {
    return {
      visibleModal: false,

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
  setup(props) {
    const { posts, totalPages, isLoading } = usePosts(10);

    const { selectedSort, sortedPost } = useSortedPosts(posts);
    const { searchQuery, sortedSearchedPosts } =
      useSortedAndSearchedPosts(sortedPost);
    return {
      posts,
      totalPages,
      isLoading,
      searchQuery,
      sortedSearchedPosts,
      selectedSort,
    };
  },
  //вызывается только при изменении зависимости в computed
  // computed запоминает результат фильтрации, как кэширование
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.observer {
  height: 40px;
  margin-bottom: 20px;
}
</style>
