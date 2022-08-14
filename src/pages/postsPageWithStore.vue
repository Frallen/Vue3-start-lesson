<template>
  <div class="container">
    <h3>Текущие посты</h3>
    <h4>{{$store.state.post.limit}}</h4>
  <!--  <h4>Геттер лайков {{$store.getters.doublelikes}}</h4>
    <button @click="$store.commit('incrementLikes')">увеличить лайки</button>
    <button @click="$store.commit('decrementLikes')">уменьшить лайки</button>-->
    <div class="menu">
      <greenbutton @click="showDialog">Добавить новые посты</greenbutton
      ><Select v-model="selectedSort" :options="sortedOption"></Select>
      <default-input v-model="searchQuery"></default-input>
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
import axios from "axios";
import DefaultInput from "@/components/ui/input";
import Pagination from "@/components/ui/pagination";
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
      posts: [],
      visibleModal: false,
      isLoading: true,
      selectedSort: "",
      searchQuery: "",
      currentPage: 1,
      limit: 10,
      totalPages: 0,
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
  computed: {
    //вызывать эту функцию не надо, она используется как обычная переменная
    //:posts="sortedPosts"

  },
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
    changePage(val) {
      this.currentPage = val;
    },


  },
  mounted() {
    /*   let options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    let callback =  (entries, observer) =>{
      //если происходит пересечение объекта и если текущая страница меньше количества страниц
      if (entries[0].isIntersecting && this.currentPage<this.totalPages) {
        this.LoadMorePosts()
      }
    };
    // слежу за пересечением невидимого блока для подгрузки новых постов
    let observer = new IntersectionObserver(callback, options);
    //$refs это прямая ссылка на объект
    observer.observe(this.$refs.observer);*/
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
