<template>
  <img
    :src="showImage"
    alt="보고용 임시 페이크 페이지"
    style="width: 100%; object-fit: cover; object-position: center"
    @click="toggleImage"
  />
</template>

<script setup>
import { ref } from "vue";
import ImgMypageView from "@/assets/images/ImgMypage.svg";
import ImgMypageModifyView from "@/assets/images/ImgMypageModify.svg";

const importedMypageView = ref(ImgMypageView);
const importedModifyView = ref(ImgMypageModifyView);

const showImage = ref(importedMypageView.value);

const toggleImage = () => {
  showImage.value =
    showImage.value === importedMypageView.value
      ? importedModifyView.value
      : importedMypageView.value;
};
</script>

<style scoped>
</style>
