<template>
  <section :class="$style.wrapper">
    <CommonNav />
    <Notices />
  </section>
</template>

<script setup>
import CommonNav from "@/layouts/CommonNav.vue";
import Notices from "#/notice/Notices.vue";
</script>

<style src="@/assets/css/notice/Contents.css" module></style>
