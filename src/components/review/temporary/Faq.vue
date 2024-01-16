<template>
  <img
    :src="importedImgFaq"
    alt="보고용 임시 페이크 페이지"
    style="width: 100%; object-fit: cover; object-position: center"
  />
</template>

<script setup>
import { ref } from "vue";
import ImgFaq from "@/assets/images/ImgFaq.svg";

const importedImgFaq = ref(ImgFaq);
</script>

<style src="./Notice.css" scoped></style>
