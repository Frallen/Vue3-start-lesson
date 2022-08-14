import { createApp } from "vue";
import App from "./App.vue";
import components from "@/components/ui";
import router from "@/router/router";
import vIntersection from "@/derectives/vIntersection";
import store from "@/store";
const app = createApp(App);

//Для каждого глобального компонента я вызываю регистрацию компонетов вью
components.forEach((component) => {
  //передаю сначла имя компонента(как назвал его в самом компоненте, далее передаю сам компонент)
  app.component(component.name, component);
});
//директивы для переиспользуемых кастомных функций
app.directive("Intersection", vIntersection);
//региструем пакеты с помощью use , передаю туда настроеный роутинг
app.use(router).use(store).mount("#app");
