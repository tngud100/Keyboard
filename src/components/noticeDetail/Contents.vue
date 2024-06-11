<template>
  <section :class="$style.wrapper">
    <CommonNav />
    <Notice
      :title="noticeData.title"
      :author="noticeData.author"
      :createdDate="noticeData.createdDate"
      :content="noticeData.content"
    />
  </section>
</template>

<script setup>
import CommonNav from "@/layouts/CommonNav.vue";
import Notice from "#/noticeDetail/Notice.vue";
const noticeData = {
  title: "이 집 키보드 맛집이네!",
  author: "조선타자기",
  createdDate: "2023-01-09",
  content:
    "<div>안녕하세요. 첫 구매자입니다!</div>ㅎㅎ<br /><br />하하<br />ㅎ호ㅗ호ㅗ",
};
</script>

<style src="@/assets/css/noticeDetail/Contents.css" module></style>
