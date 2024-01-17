<template>
  <header class="header">
    <h3 class="title">{{ title }}</h3>
    <p class="desc">(유저들의 문구)</p>
  </header>
  <nav class="nav">
    <ul class="navList">
      <li
        class="navItem"
        :class="activeTab(ROUTE_PATH.REVIEW)"
        @click="onTabClick(ROUTE_PATH.REVIEW)"
      >
        리뷰
      </li>
      <li
        class="navItem"
        :class="activeTab(ROUTE_PATH.NOTICE)"
        @click="onTabClick(ROUTE_PATH.NOTICE)"
      >
        공지사항
      </li>
      <li
        class="navItem"
        :class="activeTab(ROUTE_PATH.FAQ)"
        @click="onTabClick(ROUTE_PATH.FAQ)"
      >
        FAQ
      </li>
      <li
        class="navItem"
        :class="activeTab(ROUTE_PATH.DOWNLOAD)"
        @click="onTabClick(ROUTE_PATH.DOWNLOAD)"
      >
        자료실
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ROUTE_PATH } from "@/routes";

const route = useRoute();
const router = useRouter();

const title = computed(() => {
  switch (route.path) {
    case "/review":
      return "리뷰";
    case "/notice":
      return "공지사항";
    case "/faq":
      return "FAQ";
    case "/download":
      return "자료실";
    default:
      return "";
  }
});

const onTabClick = (path) => router.push(path);

const activeTab = (path) => path === route.path && "active";
</script>

<style src="./CommonNav.css" scoped></style>
