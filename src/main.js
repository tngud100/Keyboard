import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import "@/assets/css/reset.css";
import "@/assets/css/font.css";
import router from "@/routes";
import axios from 'axios';
import "@/utils/axiosInstance.js";
import CKEditor  from '@ckeditor/ckeditor5-vue'

// import "@vueup/vue-quill/dist/vue-quill.snow.css";
// import { Quill } from '@vueup/vue-quill';
// import ImageResize from 'quill-image-resize-module';

// Quill.register('modules/imageResize', ImageResize);


let app = createApp(App);  
let pinia = createPinia();  

app.config.globalProperties.$axios = axios;
app.use(router);
app.use(pinia);
app.use(CKEditor);

app.mount("#app");
