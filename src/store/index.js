import { createStore } from "vuex";
import { PostModule } from "@/store/postModule";

export default createStore({
  modules: {
    //регистрируем модуль и обращаемся через переменную post
    post: PostModule,
  },
  /*  state: {
    likes: 2,
  },
  //computed
  getters: {
    doublelikes(state) {
      return state.likes * 2;
    },
  },
  mutations: {
      incrementLikes(state){
          state.likes++

      },
      decrementLikes(state){
          state.likes--

      }
  },
  actions: {},
  modules: {},*/
});
