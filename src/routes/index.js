import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import SignupView from "@/views/SignupView.vue";
import AgreementView from "@/views/AgreementView.vue";
import KeyboardView from "@/views/KeyboardView.vue";
import ProductDetailView from "@/views/ProductDetailView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/login",
    component: LoginView,
  },
  {
    path: "/signup",
    component: SignupView,
  },
  {
    path: "/agreement",
    component: AgreementView,
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
