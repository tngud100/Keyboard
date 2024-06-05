<template>
  <section>
    <div :class="$style.adminContainer">
      <p :class="$style.pageLabel">{{ label[boardIdx] }}</p>

      <ReviewContents :boardIdx="boardIdx" v-if="boardIdx == 0" />
      <NoticeContents :boardIdx="boardIdx" v-if="boardIdx == 1" />
      <FaqContents :boardIdx="boardIdx" v-if="boardIdx == 2" />
      <downloadContents :boardIdx="boardIdx" v-if="boardIdx == 3" />
    </div>
  </section>
</template>

<script setup>
import useAdminStore from "@/store/useAdminPageStore.js";
import ReviewContents from "#/adminBoard/ReviewContents.vue";
import NoticeContents from "#/adminBoard/NoticeContents.vue";
import FaqContents from "#/adminBoard/FaqContents.vue";
import downloadContents from "#/adminBoard/downloadContents.vue";
import { computed } from "vue";

const adminStore = useAdminStore();
const label = ["리뷰", "공지사항", "자주묻는 질문", "자료실"];
const boardIdx = computed(() => adminStore.adminBoardIndex);
</script>

<style src="@/assets/css/adminBoard/Contents.css" module></style>
