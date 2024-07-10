<template>
  <section>
    <Swiper :class="$style.SwiperSection" />
    <Intro :class="$style.IntroSection" />
    <Product :class="$style.ProductSection" />
  </section>
</template>

<script setup>
import Swiper from "#/swiper/HomeSwiperContents.vue";
import Intro from "#/renewalHome/IntroDeskTop.vue";
import Product from "#/renewalHome/ProductDeskTop.vue";
</script>
<style src="@/assets/css/renewalHome/DeskTopContents.css" module></style>
