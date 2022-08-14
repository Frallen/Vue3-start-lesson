<template>
  <div class="container">
    <h3>Текущие посты</h3>
    <!-- <h4>{{ $store.state.post.limit }}</h4>
   <h4>Геттер лайков {{$store.getters.doublelikes}}</h4>
   <button @click="$store.commit('incrementLikes')">увеличить лайки</button>
   <button @click="$store.commit('decrementLikes')">уменьшить лайки</button>-->
    <div class="menu">
      <greenbutton @click="showDialog">Добавить новые посты</greenbutton
      ><Select v-model="selectedSort" :options="sortedOption"></Select>
      <default-input :modelValue="searchQuery" @change:modelValue="selectedSort"></default-input>
    </div>
    <preloader v-if="isLoading"></preloader>
    <PostList
      v-else
      @remove="removePost"
      :posts="sortedSearchedPosts"
    ></PostList>
    <div v-intersection="LoadMorePosts" class="observer"></div>
    <!-- <Pagination
      :current-page="currentPage"
      :totalPages="totalPages"
      @changePage="changePage"
    ></Pagination>-->
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
import DefaultInput from "@/components/ui/input";
import Pagination from "@/components/ui/pagination";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
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
    return {};
  },
  //вотч мутирует и создает движ при каждом изменении модели
  watch: {},
  //вызывается только при изменении зависимости в computed
  // computed запоминает результат фильтрации, как кэширование
  computed: {
    ...mapState({
      posts: (state) => state.posts.posts,
      visibleModal: (state) => state.posts.visibleModal,
      isLoading: (state) => state.posts.isLoading,
      selectedSort: (state) => state.posts.selectedSort,
      searchQuery: (state) => state.posts.searchQuery,
      currentPage: (state) => state.posts.currentPage,
      limit: (state) => state.posts.limit,
      totalPages: (state) => state.posts.totalPages,
      sortedOption: (state) => state.posts.sortedOption,
    }),
    ...mapGetters({
      sortedPosts: "posts/sortedPosts",
      sortedSearchedPosts: "posts/sortedSearchedPosts",
    }),
  },
  methods: {
    ...mapMutations({
      setPage: "posts/setPage",
      setCurrentPage:"posts/setCurrentPage",
      setPosts:"posts/setPosts",
      setLoading:"posts/setLoading",
      selectedSort:"posts/selectedSort",
      setSearchQuery:"posts/setSearchQuery"

    }),
    ...mapActions({
      fetchPosts: "posts/fetchPosts",
      LoadMorePosts: "posts/LoadMorePosts",
    }),
  },
  mounted() {

  },
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
