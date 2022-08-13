import Main from "@/pages/main";
import postPage from "@/pages/postPage";
import postsPage from "@/pages/postsPage";
import about from "@/pages/about";
import { createRouter, createWebHistory } from "vue-router";

//Маршруты создаюся с помощью объектов
const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/posts",
    component: postsPage,
  },
  {
    path: "/post/:id",
    component: postPage,
  },
  {
    path: "/about",
    component: about,
  },
];
const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});
//обязательный экспорт
export default router;