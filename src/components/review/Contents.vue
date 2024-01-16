<template>
  <section class="wrapper">
    <header class="header">
      <h3 class="title">{{ currentTabName }}</h3>
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
import { computed } from "vue";
import Review from "#/review/Review.vue";
import Notice from "#/review/temporary/Notice.vue";
import Faq from "#/review/temporary/Faq.vue";
import Download from "#/review/temporary/Download.vue";
import { useTabNameStore } from "@/stores/temporaryStore";

const store = useTabNameStore();
const props = computed(() => {
  return {
    currentTabName: store.getCurrentTabName(),
  };
});

const tabs = {
  Review,
  Notice,
  Faq,
  Download,
};

const TAB_NAME = {
  REVIEW: "Review",
  NOTICE: "Notice",
  FAQ: "Faq",
  DOWNLOAD: "Download",
};

const currentTabName = computed(() => props.value.currentTabName);

const isActiveTab = (value) => currentTabName.value === value && "active";

const toggleTab = (value) => store.setCurrentTabName(value);
</script>

<style src="./Contents.css" scoped></style>
