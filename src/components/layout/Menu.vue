<template>
  <ul class="menuList">
    <li class="menuItem">
      <img :src="importedOrder" alt="주문조회" />주문조회
    </li>
    <li class="menuItem">
      <RouterLink :to="ROUTE_PATH.REVIEW" class="link">
        <img :src="importedReview" alt="리뷰" />리뷰
      </RouterLink>
    </li>
    <li class="menuItem">
      <RouterLink :to="ROUTE_PATH.NOTICE" class="link">
        <img :src="importedNotice" alt="공지사항" />공지사항
      </RouterLink>
    </li>
    <li class="menuItem">
      <RouterLink :to="ROUTE_PATH.FAQ" class="link">
        <img :src="importedFAQ" alt="자주묻는질문" />자주묻는질문
      </RouterLink>
    </li>
    <li class="menuItem">
      <RouterLink :to="ROUTE_PATH.DOWNLOAD" class="link">
        <img :src="importedDownload" alt="자료실" />자료실
      </RouterLink>
    </li>
  </ul>

  <div class="topMenuWrapper">
    <img
      :src="importedTopMenu"
      alt="맨위로 이동"
      class="topMenu"
      @click="scrollToTop"
      v-if="shouldShowTopBtn"
    />
  </div>
</template>

<script setup>
import { ROUTE_PATH } from "@/routes";
import { ref } from "vue";
import { scrollToTop } from "@/utils";
import { useTopStore } from "@/stores/useMenuStore";
import { storeToRefs } from "pinia";
import order from "@/assets/images/order.svg";
import review from "@/assets/images/review.svg";
import faq from "@/assets/images/faq.svg";
import notice from "@/assets/images/notice.svg";
import download from "@/assets/images/download.svg";
import topMenu from "@/assets/images/top.svg";

const { shouldShowTopBtn } = storeToRefs(useTopStore());

const importedOrder = ref(order);
const importedReview = ref(review);
const importedFAQ = ref(faq);
const importedNotice = ref(notice);
const importedDownload = ref(download);
const importedTopMenu = ref(topMenu);
</script>

<style src="./Menu.css" scoped></style>
