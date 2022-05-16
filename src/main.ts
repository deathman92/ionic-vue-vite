import App from "./App.vue";
import router from "./router";

import "./theme/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(IonicVue);

router.isReady().then(() => {
  app.mount("#app");
});
