<template>
  <section :class="$style.wrapper">
    <CommonNav />
    <Products />
  </section>
</template>

<script setup>
import CommonNav from "@/layouts/CommonNav.vue";
import Products from "#/review/Products.vue";
</script>

<style src="./Contents.css" module></style>
