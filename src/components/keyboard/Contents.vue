<template>
  <div :class="$style.wrapper">
    <ul :class="$style.productList">
      <li :class="$style.productItem" @click="moveProductDetailPage">
        <img
          :src="firstKeyboard"
          alt="상품 이미지"
          :class="$style.productImg"
        />
      </li>
      <li :class="$style.productItem" @click="moveProductDetailPage">
        <img
          :src="secondKeyboard"
          alt="상품 이미지"
          :class="$style.productImg"
        />
      </li>
      <li :class="$style.productItem" @click="moveProductDetailPage">
        <img
          :src="thirdKeyboard"
          alt="상품 이미지"
          :class="$style.productImg"
        />
      </li>
      <li :class="$style.productItem" @click="moveProductDetailPage">
        <img
          :src="fourthKeyboard"
          alt="상품 이미지"
          :class="$style.productImg"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import firstKeyboard from "@/assets/images/keyboard_1.png";
import secondKeyboard from "@/assets/images/keyboard_2.png";
import thirdKeyboard from "@/assets/images/keyboard_3.png";
import fourthKeyboard from "@/assets/images/keyboard_4.png";

const router = useRouter();

const moveProductDetailPage = () => {
  router.push("/keyboard/1");
};
</script>

<style src="./Contents.css" module></style>
