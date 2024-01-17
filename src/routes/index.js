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
import NoticeView from "@/views/NoticeView.vue";
import NoticeDetailView from "@/views/NoticeDetailView.vue";
import FaqView from "@/views/FaqView.vue";
import DownloadView from "@/views/DownloadView.vue";

import TemporaryBasket from "@/components/review/temporary/basket.vue";

export const ROUTE_PATH = {
  REVIEW: "/review",
  NOTICE: "/notice",
  FAQ: "/faq",
  DOWNLOAD: "/download",
};

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
    path: "/notice",
    component: NoticeView,
  },

  {
    path: "/faq",
    component: FaqView,
  },
  {
    path: "/download",
    component: DownloadView,
  },
  {
    path: "/notice/:id",
    component: NoticeDetailView,
  },
  {
    path: "/temporaryBasket",
    component: TemporaryBasket,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
