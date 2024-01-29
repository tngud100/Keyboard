<template>
  <section :class="$style.wrapper">
    <CommonNav />
    <Notices />
  </section>
</template>

<script setup>
import CommonNav from "#/layout/CommonNav.vue";
import Notices from "#/notice/Notices.vue";
</script>

<style src="./Contents.css" module></style>
