<template>
  <section class="wrapper">
    <header class="header">
      <h3 class="title">리뷰</h3>
      <p class="desc">(유저들의 문구)</p>
    </header>
    <nav class="nav">
      <ul class="navList">
        <li
          class="navItem"
          :class="isActiveTab(TAB_NAME.REVIEW)"
          @click="toggleTab(TAB_NAME.REVIEW)"
        >
          리뷰
        </li>
        <li
          class="navItem"
          :class="isActiveTab(TAB_NAME.NOTICE)"
          @click="toggleTab(TAB_NAME.NOTICE)"
        >
          공지사항
        </li>
        <li
          class="navItem"
          :class="isActiveTab(TAB_NAME.FAQ)"
          @click="toggleTab(TAB_NAME.FAQ)"
        >
          FAQ
        </li>
        <li
          class="navItem"
          :class="isActiveTab(TAB_NAME.DOWNLOAD)"
          @click="toggleTab(TAB_NAME.DOWNLOAD)"
        >
          자료실
        </li>
      </ul>
    </nav>
    <component :is="tabs[currentTabName]" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import Review from "#/review/Review.vue";
import Notice from "#/review/Notice.vue";

const tabs = {
  Review,
  Notice,
};

const TAB_NAME = {
  REVIEW: "Review",
  NOTICE: "Notice",
  FAQ: "Faq",
  DOWNLOAD: "Download",
};
const currentTabName = ref("Review");

const isActiveTab = (value) => currentTabName.value === value && "active";

const toggleTab = (value) => (currentTabName.value = value);
</script>

<style src="./Contents.css" scoped></style>
