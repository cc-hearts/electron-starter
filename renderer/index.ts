import { createApp } from "vue";
import App from "./app.vue";

(async () => {
  const app = createApp(App);

  app.mount("#app");
})();
