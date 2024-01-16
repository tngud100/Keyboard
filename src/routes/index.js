import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import SignupView from "@/views/SignupView.vue";
import AgreementView from "@/views/AgreementView.vue";
import MypageView from "@/views/MypageView.vue";
import KeyboardView from "@/views/KeyboardView.vue";
import ProductDetailView from "@/views/ProductDetailView.vue";
import BasketView from "@/views/BasketView.vue";
import ReviewView from "@/views/ReviewView.vue";

import noticeDetail from "@/components/review/temporary/noticeDetail.vue";
import TemporaryBasket from "@/components/review/temporary/basket.vue";

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
    path: "/mypage",
    component: MypageView,
  },
  {
    path: "/keyboard",
    component: KeyboardView,
  },
  {
    path: "/keyboard/:id",
    component: ProductDetailView,
  },
  {
    path: "/switch",
    component: KeyboardView,
  },
  {
    path: "/pcb",
    component: KeyboardView,
  },
  {
    path: "/keycap",
    component: KeyboardView,
  },
  {
    path: "/tool",
    component: KeyboardView,
  },
  {
    path: "/basket",
    component: BasketView,
  },
  {
    path: "/review",
    component: ReviewView,
  },
  {
    path: "/noticeDetail",
    component: noticeDetail,
  },
  {
    path: "/TemporaryBasket",
    component: TemporaryBasket,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
