<template>
  <div :class="$style.wrapper">
    <Nav />
    <div :class="$style.contentsBox">
      <Detail
        :title="data.title"
        :createdDate="data.date"
        :content="data.content"
        :fileLink="data.fileLink"
        :fileName="data.fileName"
      />
    </div>
  </div>
</template>

<script setup>
import Nav from "@/layouts/RenewalBoardMobileNav.vue";
import Detail from "#/renewalBoardDetail/mobile/Detail.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const router = useRoute();

const data = computed(() => {
  const path = router.path;
  if (path.includes("/board/notice")) {
    return {
      title: "이거슨 제목입니다.",
      content: "이거슨 또 다른 내용입니다.",
      date: "2024.05.03",
    };
  } else if (path.includes("/board/download")) {
    return {
      title: "이거슨 제목입니다.",
      content: "이거슨 또 다른 내용입니다.",
      date: "2024.05.03",
      fileLink: "/",
      fileName: "메뉴얼(ver 4.0 build) 다운로드",
    };
  }
});
</script>

<style src="@/assets/css/renewalBoardDetail/MobileContents.css" module></style>