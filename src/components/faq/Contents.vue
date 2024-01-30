<template>
  <section :class="$style.wrapper">
    <CommonNav />
    <Faqs />
  </section>
</template>

<script setup>
import CommonNav from "@/layouts/CommonNav.vue";
import Faqs from "#/faq/Faqs.vue";
</script>

<style src="./Contents.css" module></style>
