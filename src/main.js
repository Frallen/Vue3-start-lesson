import { createApp } from "vue";
import App from "./App.vue";
import components from "@/components/ui";

const app = createApp(App);

//Для каждого глобального компонента я вызываю регистрацию компонетов вью
components.forEach((component) => {
  //передаю сначла имя компонента(как назвал его в самом компоненте, далее передаю сам компонент)
  app.component(component.name, component);
});

app.mount("#app");
