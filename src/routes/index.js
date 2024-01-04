import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import KeyBoardView from "@/views/KeyBoardView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/keyboard",
    component: KeyBoardView,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
