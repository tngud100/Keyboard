<template>
  <section>
    <Swiper :class="$style.SwiperSection" />
    <Intro :class="$style.IntroSection" />
  </section>
</template>

<script setup>
import Swiper from "#/swiper/HomeSwiperContents.vue";
import Intro from "#/renewalHome/IntroDeskTop.vue";
</script>
<style src="@/assets/css/renewalHome/DeskTopContents.css" module></style>
