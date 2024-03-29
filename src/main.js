import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import "@/assets/css/reset.css";
import "@/assets/css/font.css";
import router from "@/routes";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import axios from 'axios'
import "@/utils/axiosInstance.js";

const app = createApp(App);
const pinia = createPinia();

app.config.globalProperties.$axios = axios
app.use(router);
app.use(pinia);

app.mount("#app");
