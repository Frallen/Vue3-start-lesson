import axios from "axios";

export const PostModule = {
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
          return [...state.posts].sort((post1, post2) => {
              //сравнение одного поста другим по названию или описанию
              return post1[state.selectedSort]?.localeCompare(
                  post2[state.selectedSort]
              );
          });
      },
      //поиск по строке в инпуте
      sortedSearchedPosts(state,getters) {
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
    selectedSort(state, totalPages) {
      state.totalPages = totalPages;
    },
    setCurrentPage(state, currentPage) {
      state.currentPage = currentPage;
    },
      SetTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
  },
  action: {
      async fetchPosts({state,commit}) {
          try {
              //изменяю стейт
              commit('isLoading',true)
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
              commit('totalPages', Math.ceil(
                  response.headers["x-total-count"] / state.limit
              ))
             commit("posts",response.data)
          } catch (e) {
          } finally {
              commit('isLoading',false)
          }
      },
      async LoadMorePosts({state,commit}) {
          try {
              commit('currentPage',state.currentPage++)
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
              commit('totalPages', Math.ceil(
                  response.headers["x-total-count"] / state.limit
              ))
              // закидываем имеющиеся посты и новые посты
              commit('posts',[...this.posts, ...response.data])
          } catch (e) {
          } finally {
              //  this.isLoading = false;
          }
      },
  },
};
