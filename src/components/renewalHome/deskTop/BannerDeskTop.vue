<template>
  <div :class="$style.bannerBox">
    <img :src="homeBanner" alt="네이버 스마트 스토어" :class="$style.banner" />
    <!-- <div :class="$style.textBox"> -->
    <!-- <p :class="$style.BannerName">네이버 스마트 스토어</p>
        <p :class="$style.text">리뷰 작성하고 다양한 해택 받아보세요 ~</p>
        <button :class="$style.btn">바로보러 가기 <IconRightClearArrow /></button> -->
    <!-- </div> -->
  </div>
</template>

<script setup>
import homeBanner from "@/assets/images/homeBanner.svg";
// import IconRightClearArrow from "#/icons/IconRightWhiteArrow.vue";
</script>

<style src="@/assets/css/renewalHome/deskTop/BannerDeskTop.css" module></style>
