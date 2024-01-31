import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import "@/assets/css/reset.css";
import "@/assets/css/font.css";
import router from "@/routes";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.mount("#app");
