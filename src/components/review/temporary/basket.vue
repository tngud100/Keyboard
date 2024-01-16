<template>
  <img
    :src="showImg"
    alt="보고용 임시 페이크 페이지"
    style="width: 100%; object-fit: cover; object-position: center"
    @click="toggleState"
  />
  <section class="wrapper"></section>
</template>

<script setup>
import { ref, computed } from "vue";
import ImgBasketEmpty from "@/assets/images/ImgBasketEmpty.svg";
import ImgBasket from "@/assets/images/ImgBasket.svg";

const importedImgBasket = ref(ImgBasket);
const importedImgBasketEmpty = ref(ImgBasketEmpty);

const state = ref(false);

const showImg = computed(() => {
  return state.value ? importedImgBasket.value : importedImgBasketEmpty.value;
});

const toggleState = () => {
  state.value = !state.value;
};
</script>

<style scoped></style>
