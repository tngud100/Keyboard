<template>
  <ul class="menuList">
    <li class="menuItem">
      <img :src="importedOrder" alt="주문조회" />주문조회
    </li>
    <li class="menuItem"><img :src="importedReview" alt="리뷰" />리뷰</li>
    <li class="menuItem">
      <img :src="importedNotice" alt="공지사항" />공지사항
    </li>
    <li class="menuItem">
      <img :src="importedFAQ" alt="자주묻는질문" />자주묻는질문
    </li>
    <li class="menuItem"><img :src="importedDownload" alt="자료실" />자료실</li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
import order from "@/assets/images/order.svg";
import review from "@/assets/images/review.svg";
import faq from "@/assets/images/faq.svg";
import notice from "@/assets/images/notice.svg";
import download from "@/assets/images/download.svg";

const importedOrder = ref(order);
const importedReview = ref(review);
const importedFAQ = ref(faq);
const importedNotice = ref(notice);
const importedDownload = ref(download);
</script>

<style scoped>
@import "./Menu.css";
</style>
