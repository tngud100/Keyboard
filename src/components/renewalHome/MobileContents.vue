<template>
  <section>
    <Swiper :class="$style.SwiperSection" />
    <Intro :class="$style.IntroSection" />
    <!-- <Product />
    <Banner />
    <News /> -->
  </section>
</template>

<script setup>
import Swiper from "#/swiper/HomeSwiperMobileContents.vue";
import Intro from "#/renewalHome/mobile/IntroMobile.vue";
// import Product from "#/renewalHome/deskTop/ProductDeskTop.vue";
// import Banner from "#/renewalHome/deskTop/BannerDeskTop.vue";
// import News from "#/renewalHome/deskTop/NewsDeskTop.vue";
</script>
<style src="@/assets/css/renewalHome/DeskTopContents.css" module>
</style>
