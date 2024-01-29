<template>
  <section :class="$style.wrapper">
    <Product v-for="n in 10" title="[In-stock] GMK NTD." :views="11" />
  </section>
</template>

<script setup>
import Product from "#/review/Product.vue";
</script>

<style src="./Products.css" module></style>
