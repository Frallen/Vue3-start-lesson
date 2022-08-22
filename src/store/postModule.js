import axios from "axios";

export const PostModule = {
  // задается область имен, для обращения к конкретному стору т.к логика может дублироватся
  namespaced: true,
  state: () => ({
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
  }),
  // Работает так же как computed
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) =>
        //сравнение одного поста другим по названию или описанию
        post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
      );
    },
    //поиск по строке в инпуте
    sortedSearchedPosts(state, getters) {
      return getters.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, bool) {
      state.isLoading = bool;
    },
    setPage(state, currentPage) {
      state.currentPage = currentPage;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setCurrentPage(state, currentPage) {
      state.currentPage = currentPage;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    SetTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        //изменяю стейт
        commit("setLoading", true);
        let response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.currentPage,
              _limit: state.limit,
            },
          }
        );
        // округление кол-ва страниц в большую сторону, чтобы оставшиеся посты перенслись на следущую страницу
        commit(
          "SetTotalPages",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
        commit("setPosts", response.data);
      } catch (e) {
        console.log(e);
      } finally {
        commit("setLoading", false);
      }
    },
    async LoadMorePosts({ state, commit }) {
      try {
        commit("setCurrentPage", state.currentPage++);
        //    this.isLoading = true;
        let response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.currentPage,
              _limit: state.limit,
            },
          }
        );
        // округление кол-ва страниц в большую сторону, чтобы оставшиеся посты перенслись на следущую страницу
        commit(
          "SetTotalPages",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
        // закидываем имеющиеся посты и новые посты
        commit("setPosts", [...state.posts, ...response.data]);
      } catch (e) {
      } finally {
        commit("setLoading", false);
      }
    },
  },
};
