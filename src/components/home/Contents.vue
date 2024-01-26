<template>
  <section :class="$style.contents">
    <div :class="$style.backgroundWrapper">
      <img
        :src="firstBackground"
        alt="첫번째 이미지"
        :class="$style.backgroundImgs"
      />
    </div>
    <div :class="$style.backgroundWrapper">
      <img
        :src="secondBackground"
        alt="두번째 이미지"
        :class="$style.backgroundImgs"
      />
    </div>
    <div :class="$style.backgroundWrapper">
      <img
        :src="thirdBackground"
        alt="세번째 이미지"
        :class="$style.backgroundImgs"
      />
    </div>
  </section>
</template>

<script setup>
import firstBackground from "@/assets/images/firstBackground.png";
import secondBackground from "@/assets/images/secondBackground.png";
import thirdBackground from "@/assets/images/thirdBackground.png";
</script>

<style src="./Contents.css" module></style>
