<template>
  <section class="wrapper">
    <Product title="[In-stock] GMK NTD." :views="11" v-for="n in 10" />
  </section>
</template>

<script setup>
import Product from "#/review/Product.vue";
</script>

<style src="./Review.css" scoped></style>
