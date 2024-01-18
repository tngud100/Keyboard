<template>
  <ul class="menuList">
    <li class="menuItem"><IconOrder />주문조회</li>
    <li class="menuItem">
      <RouterLink :to="ROUTE_PATH.REVIEW" class="link">
        <IconReview />리뷰
      </RouterLink>
    </li>
    <li class="menuItem">
      <RouterLink :to="ROUTE_PATH.NOTICE" class="link">
        <IconNotice />공지사항
      </RouterLink>
    </li>
    <li class="menuItem">
      <RouterLink :to="ROUTE_PATH.FAQ" class="link">
        <IconFaq />자주묻는질문
      </RouterLink>
    </li>
    <li class="menuItem">
      <RouterLink :to="ROUTE_PATH.DOWNLOAD" class="link">
        <IconDownload />자료실
      </RouterLink>
    </li>
  </ul>

  <div class="topMenuWrapper">
    <div class="topMenu">
      <IconTop @click="scrollToTop" v-if="shouldShowTopBtn" />
    </div>
  </div>
</template>

<script setup>
import { ROUTE_PATH } from "@/routes";
import { scrollToTop } from "@/utils";
import { useTopStore } from "@/stores/useMenuStore";
import { storeToRefs } from "pinia";
import IconOrder from "@/components/icons/IconOrder.vue";
import IconReview from "@/components/icons/IconReview.vue";
import IconNotice from "@/components/icons/IconNotice.vue";
import IconFaq from "@/components/icons/IconFaq.vue";
import IconDownload from "@/components/icons/IconDownload.vue";
import IconTop from "@/components/icons/IconTop.vue";

const { shouldShowTopBtn } = storeToRefs(useTopStore());
</script>

<style src="./Menu.css" scoped></style>
