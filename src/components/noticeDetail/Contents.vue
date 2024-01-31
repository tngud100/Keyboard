<template>
  <section :class="$style.wrapper">
    <h2 :class="$style.header">공지사항</h2>
    <Notice
      title="이 집 키보드 맛집이네!"
      author="조선타자기"
      createdDate="2023-01-09"
      views="1900"
      content="<div>안녕하세요. 첫 구매자입니다!</div>ㅎㅎ<br /><br />하하<br />ㅎ호ㅗ호ㅗ"
    />
  </section>
</template>

<script setup>
import Notice from "#/noticeDetail/Notice.vue";
</script>

<style src="@/assets/css/noticeDetail/Contents.css" module></style>
