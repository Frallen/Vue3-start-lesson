import axios from "axios";
import { onMounted, ref } from "vue";

export function usePosts(limit) {
  const posts = ref([]);
  const totalPages = ref(0);
  const isLoading = ref(true);
  const fetching = async () => {
    try {
      isLoading.value = true;
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _page: 1,
            _limit: limit,
          },
        }
      );
      // округление кол-ва страниц в большую сторону, чтобы оставшиеся посты перенслись на следущую страницу
      totalPages.value = Math.ceil(response.headers["x-total-count"] / limit);
      posts.value = response.data;
    } catch (e) {
    } finally {
      isLoading.value = false;
    }
  };
  //как useEffect при монтировании вызываем загрузку постов
  onMounted(fetching);

  return { posts, isLoading, totalPages };

}
