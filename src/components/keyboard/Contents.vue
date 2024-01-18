<template>
  <div class="wrapper">
    <ul class="productList">
      <li class="productItem" @click="moveProductDetailPage">
        <img
          :src="importedFirstKeyboard"
          alt="상품 이미지"
          class="productImg"
        />
      </li>
      <li class="productItem" @click="moveProductDetailPage">
        <img
          :src="importedSecondKeyboard"
          alt="상품 이미지"
          class="productImg"
        />
      </li>
      <li class="productItem" @click="moveProductDetailPage">
        <img
          :src="importedThirdKeyboard"
          alt="상품 이미지"
          class="productImg"
        />
      </li>
      <li class="productItem" @click="moveProductDetailPage">
        <img
          :src="importedFourthKeyboard"
          alt="상품 이미지"
          class="productImg"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import firstKeyboard from "@/assets/images/keyboard_1.png";
import secondKeyboard from "@/assets/images/keyboard_2.png";
import thirdKeyboard from "@/assets/images/keyboard_3.png";
import fourthKeyboard from "@/assets/images/keyboard_4.png";

const importedFirstKeyboard = ref(firstKeyboard);
const importedSecondKeyboard = ref(secondKeyboard);
const importedThirdKeyboard = ref(thirdKeyboard);
const importedFourthKeyboard = ref(fourthKeyboard);
const router = useRouter();

const moveProductDetailPage = () => {
  router.push("/keyboard/1");
};
</script>

<style src="./Contents.css" scoped></style>
