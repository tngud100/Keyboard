import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import KeyboardView from "@/views/KeyboardView.vue";
import ProductDetailView from "@/views/ProductDetailView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/keyboard",
    component: KeyboardView,
  },
  {
    path: "/keyboard/:id",
    component: ProductDetailView,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});