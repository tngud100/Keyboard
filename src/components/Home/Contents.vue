<template>
  <section class="contents">
    <div class="backgroundWrapper">
      <img
        :src="importedFirstBackground"
        alt="첫번째 이미지"
        class="backgroundImgs"
      />
      <button type="button" class="firstBackgroundBtn">
        <img :src="importedGoShop" alt="판매사이트로 이동" />
      </button>
    </div>
    <div class="backgroundWrapper">
      <img
        :src="importedSecondBackground"
        alt="두번째 이미지"
        class="backgroundImgs"
      />
    </div>
    <div class="backgroundWrapper">
      <img
        :src="importedThirdBackground"
        alt="세번째 이미지"
        class="backgroundImgs"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import firstBackground from "@/assets/images/firstBackground.png";
import secondBackground from "@/assets/images/secondBackground.png";
import thirdBackground from "@/assets/images/thirdBackground.png";
import goShop from "@/assets/images/goShop.svg";

const importedFirstBackground = ref(firstBackground);
const importedSecondBackground = ref(secondBackground);
const importedThirdBackground = ref(thirdBackground);
const importedGoShop = ref(goShop);
</script>

<style scoped>
@import "./Contents.css";
</style>
