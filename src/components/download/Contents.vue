<template>
  <section :class="$style.wrapper">
    <CommonNav />
    <Downloads />
  </section>
</template>

<script setup>
import CommonNav from "@/layouts/CommonNav.vue";
import Downloads from "#/download/Downloads.vue";
</script>

<style src="@/assets/css/download/Contents.css" module></style>
