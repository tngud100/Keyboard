import { createRouter, createWebHistory } from 'vue-router';
import getTokenData from '@/utils/getTokenData';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import SignupView from '@/views/SignupView.vue';
import SignupCompleteView from '@/views/SignupCompleteView.vue';
import MypageView from '@/views/MypageView.vue';
import AgreementView from '@/views/AgreementView.vue';
import KeyboardView from '@/views/KeyboardView.vue';
import ProductDetailView from '@/views/ProductDetailView.vue';
import BasketView from '@/views/BasketView.vue';
import ReviewView from '@/views/ReviewView.vue';
import NoticeView from '@/views/NoticeView.vue';
import NoticeDetailView from '@/views/NoticeDetailView.vue';
import FaqView from '@/views/FaqView.vue';
import DownloadView from '@/views/DownloadView.vue';
import OrderView from '@/views/OrderView.vue';
import SwitchView from '@/views/SwitchView.vue';
import PcbView from '@/views/PcbView.vue';
import KeycapView from '@/views/KeycapView.vue';
import ToolView from '@/views/ToolView.vue';
import AdminLoginView from '@/views/AdminLoginView.vue';
import AdminProductView from '@/views/AdminProductView.vue';
import AdminBoardView from '@/views/AdminBoardView.vue';
import AdminInquireView from '@/views/AdminInquireView.vue';
import AdminMemberView from '@/views/AdminMemberView.vue';
import AdminOrderView from '@/views/AdminOrderView.vue';

export const ROUTE_PATH = {
  REVIEW: "/review",
  NOTICE: "/notice",
  FAQ: "/faq",
  DOWNLOAD: "/download",
};


const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: LoginView },
  { path: '/mypage', component: MypageView, meta: { requiresAuth: true } },
  { path: '/signup', component: SignupView },
  { path: '/signupComplete', component: SignupCompleteView },
  { path: '/agreement', component: AgreementView },
  { path: '/keyboard', component: KeyboardView },
  { path: '/keyboard/:id', component: ProductDetailView },
  { path: '/switch', component: SwitchView },
  { path: '/pcb', component: PcbView },
  { path: '/keycap', component: KeycapView },
  { path: '/tool', component: ToolView },
  { path: '/basket', component: BasketView },
  { path: '/review', component: ReviewView },
  { path: '/notice', component: NoticeView },
  { path: '/faq', component: FaqView },
  { path: '/download', component: DownloadView },
  { path: '/notice/:id', component: NoticeDetailView },
  { path: '/order', component: OrderView },

  { path: '/admin/login', component: AdminLoginView },
  { path: '/admin/products', component: AdminProductView },
  { path: '/admin/member', component: AdminMemberView },
  { path: '/admin/order', component: AdminOrderView },
  { path: '/admin/board', component: AdminBoardView },
  { path: '/admin/inquire', component: AdminInquireView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const { getRoleFromToken } = getTokenData();

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('token');
  const role = getRoleFromToken();

  if (to.path === '/admin/login') {
    return next();
  }

  if (to.matched.some(record => record.path.startsWith('/admin')) && !loggedIn) {
    return next('/admin/login');
  }
  if (to.matched.some(record => record.path.startsWith('/admin')) && role !== 'ROLE_ADMIN') {
    next('/admin/login');
    alert('관리자만 접근 가능합니다.');
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    return next('/login');
  }

  next();
});

export default router;
